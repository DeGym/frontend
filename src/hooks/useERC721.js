import { useWallet } from '@/context/WalletContext';
import ERC721ABI from '@/contracts/ERC721ABI.json';

// Placeholder function for fetching NFT transactions
const fetchNFTTransactionsFromAPI = async (address, contractAddress, limit) => {
    // Simulating API call delay
    await new Promise(resolve => setTimeout(resolve, 500));

    return [
        {
            tokenId: '1',
            from: '0x1234...',
            to: address,
            timestamp: Date.now() - 100000,
        },
        {
            tokenId: '2',
            from: address,
            to: '0x5678...',
            timestamp: Date.now() - 200000,
        },
    ];
};

export const useERC721 = (contractAddress) => {
    const { web3, account } = useWallet();

    const checkOwnership = async (address) => {
        if (!web3) return false;
        try {
            const contract = new web3.eth.Contract(ERC721ABI, contractAddress);
            const balance = await contract.methods.balanceOf(address).call();
            return parseInt(balance) > 0;
        } catch (error) {
            console.error('Error checking ERC721 ownership:', error);
            return false;
        }
    };

    const getTransactionHistory = async (address = account, limit = 10) => {
        if (!web3 || !address) return [];
        try {
            const transactions = await fetchNFTTransactionsFromAPI(address, contractAddress, limit);
            return transactions.map(tx => ({
                ...tx,
                type: 'ERC721',
            }));
        } catch (error) {
            console.error('Error fetching ERC721 transaction history:', error);
            return [];
        }
    };

    return { checkOwnership, getTransactionHistory };
};