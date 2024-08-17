import { useWallet } from '@/context/WalletContext';
import ERC20ABI from '@/contracts/ERC20ABI.json';

export const useERC20 = (contractAddress: string) => {
    const { web3, account } = useWallet();

    const getBalance = async (address?: string): Promise<string> => {
        if (!web3 || !address) return '0';
        try {
            const contract = new web3.eth.Contract(ERC20ABI as any, contractAddress);
            const balance = await contract.methods.balanceOf(address).call();
            return web3.utils.fromWei(balance, 'ether');
        } catch (error) {
            console.error('Error fetching ERC20 balance:', error);
            return '0';
        }
    };

    const transfer = async (to: string, amount: string): Promise<boolean> => {
        if (!web3 || !account) return false;
        try {
            const contract = new web3.eth.Contract(ERC20ABI as any, contractAddress);
            const weiAmount = web3.utils.toWei(amount, 'ether');
            await contract.methods.transfer(to, weiAmount).send({ from: account });
            return true;
        } catch (error) {
            console.error('Error transferring ERC20 tokens:', error);
            return false;
        }
    };

    const getTransactionHistory = async (address: string) => {
        if (!web3 || !address) return [];
        try {
            const contract = new web3.eth.Contract(ERC20ABI as any, contractAddress);
            const transferEvents = await contract.getPastEvents('Transfer', {
                filter: { $or: [{ from: address }, { to: address }] },
                fromBlock: 0,
                toBlock: 'latest'
            });

            return transferEvents.map((event: any) => ({
                transactionHash: event.transactionHash,
                from: event.returnValues.from,
                to: event.returnValues.to,
                value: web3.utils.fromWei(event.returnValues.value, 'ether'),
                blockNumber: event.blockNumber
            }));
        } catch (error) {
            console.error('Error fetching transaction history:', error);
            return [];
        }
    };

    return { getBalance, transfer, getTransactionHistory };
};