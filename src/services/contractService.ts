import Web3 from 'web3';
import { AbiItem } from 'web3-utils';
import { Contract } from 'web3-eth-contract';

export class ContractService {
    private web3: Web3;
    private contracts: { [key: string]: Contract } = {};

    constructor(web3: Web3) {
        this.web3 = web3;
    }

    public async initContract(name: string, abi: AbiItem[], address: string): Promise<void> {
        this.contracts[name] = new this.web3.eth.Contract(abi, address);
    }

    public getContract(name: string): Contract {
        if (!this.contracts[name]) {
            throw new Error(`Contract ${name} not initialized`);
        }
        return this.contracts[name];
    }

    public async callMethod(contractName: string, methodName: string, ...args: any[]): Promise<any> {
        const contract = this.getContract(contractName);
        return await contract.methods[methodName](...args).call();
    }

    public async sendTransaction(contractName: string, methodName: string, fromAddress: string, ...args: any[]): Promise<any> {
        const contract = this.getContract(contractName);
        return await contract.methods[methodName](...args).send({ from: fromAddress });
    }
}

export const createContractService = (web3: Web3): ContractService => {
    return new ContractService(web3);
};