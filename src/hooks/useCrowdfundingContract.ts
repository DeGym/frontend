import { useEffect, useState } from 'react';
import { useWallet } from '@/context/WalletContext';
import { useToast } from '@/context/ToastContext';
import crowdfundingABI from '@/contracts/CrowdfundingABI.json';
import ERC20ABI from '@/contracts/ERC20ABI.json';

const CROWDFUNDING_ADDRESS = '0x752A41D144d1c2c814958E4050adda59CB496a4b';
const TOKEN_ADDRESS = '0x063F255689b00A877F6be55109b3ECA24e266809';

export const useCrowdfundingContract = () => {
    const { web3, account } = useWallet();
    const { showToast } = useToast();
    const [contract, setContract] = useState<any>(null);
    const [tokenContract, setTokenContract] = useState<any>(null);

    useEffect(() => {
        if (web3) {
            const crowdfundingContract = new web3.eth.Contract(crowdfundingABI, CROWDFUNDING_ADDRESS);
            setContract(crowdfundingContract);

            // Initialize token contract
            const tokenContract = new web3.eth.Contract(ERC20ABI, TOKEN_ADDRESS);
            setTokenContract(tokenContract);
        }
    }, [web3]);

    const contribute = async (amount: string) => {
        if (!contract || !account) {
            showToast('Please connect your wallet', 'warning');
            return;
        }

        try {
            if (!web3) {
                throw new Error('Web3 is not initialized');
            }
            await contract.methods.contribute().send({
                from: account,
                value: web3.utils.toWei(amount, 'ether')
            });
            showToast('Contribution successful!', 'success');
        } catch (error) {
            console.error('Contribution error:', error);
            showToast('Failed to contribute. Please try again.', 'error');
            throw error;
        }
    };

    return { contribute };
};