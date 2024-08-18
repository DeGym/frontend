import Web3 from 'web3';
import { AbiItem } from 'web3-utils';
import { Contract } from 'web3-eth-contract';

/**
 * Service for managing Web3 contract interactions.
 */
export class ContractService {
    private web3: Web3;
    private contracts: { [key: string]: Contract<AbiItem[]> } = {};

    /**
     * Creates an instance of ContractService.
     * @param {Web3} web3 - The Web3 instance to use for contract interactions.
     */
    constructor(web3: Web3) {
        this.web3 = web3;
    }

    /**
     * Initializes a contract with the given name, ABI, and address.
     * @param {string} name - The name to use for referencing the contract.
     * @param {AbiItem[]} abi - The ABI of the contract.
     * @param {string} address - The address of the deployed contract.
     * @returns {Promise<void>}
     */
    public async initContract(name: string, abi: AbiItem[], address: string): Promise<void> {
        this.contracts[name] = new this.web3.eth.Contract(abi, address);
    }

    /**
     * Gets the contract instance for the given name.
     * @param {string} name - The name of the contract to retrieve.
     * @returns {Contract} The contract instance.
     * @throws {Error} If the contract is not initialized.
     */
    public getContract(name: string): Contract<AbiItem[]> {
        if (!this.contracts[name]) {
            throw new Error(`Contract ${name} not initialized`);
        }
        return this.contracts[name];
    }

    /**
     * Calls a method on the contract with the given name.
     * @param {string} contractName - The name of the contract.
     * @param {string} methodName - The name of the method to call.
     * @param {...any} args - The arguments to pass to the method.
     * @returns {Promise<any>} The result of the method call.
     */
    public async callMethod(contractName: string, methodName: string, ...args: any[]): Promise<any> {
        const contract = this.getContract(contractName);
        return await contract.methods[methodName](...args).call();
    }

    /**
     * Sends a transaction to the contract with the given name.
     * @param {string} contractName - The name of the contract.
     * @param {string} methodName - The name of the method to call.
     * @param {string} fromAddress - The address to send the transaction from.
     * @param {...any} args - The arguments to pass to the method.
     * @returns {Promise<any>} The result of the transaction.
     */
    public async sendTransaction(contractName: string, methodName: string, fromAddress: string, ...args: any[]): Promise<any> {
        const contract = this.getContract(contractName);
        return await contract.methods[methodName](...args).send({ from: fromAddress });
    }
}

export const createContractService = (web3: Web3): ContractService => {
    return new ContractService(web3);
};