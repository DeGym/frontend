import { useEffect } from 'react';
import { useWeb3 } from './useWeb3';
import { useToast } from '@/context/ToastContext';
import stakingABI from '@/contracts/StakingABI.json'; // Import the ABI from a TypeScript file


const STAKING_ADDRESS = '0x...'; // Replace with your staking contract's address

export const useStakingContract = () => {
    const { contractService, account } = useWeb3();
    const { showToast } = useToast();

    useEffect(() => {
        if (contractService) {
            contractService.initContract('Staking', stakingABI, STAKING_ADDRESS);
        }
    }, [contractService]);

    const stake = async (amount: string) => {
        if (contractService && account) {
            try {
                await contractService.sendTransaction('Staking', 'stake', account, amount);
                showToast('Staking successful', 'success');
            } catch (error) {
                console.error('Staking error:', error);
                showToast('Failed to stake tokens', 'error');
                throw error;
            }
        }
    };

    const unstake = async (amount: string) => {
        if (contractService && account) {
            try {
                await contractService.sendTransaction('Staking', 'unstake', account, amount);
                showToast('Unstaking successful', 'success');
            } catch (error) {
                console.error('Unstaking error:', error);
                showToast('Failed to unstake tokens', 'error');
                throw error;
            }
        }
    };

    const claim = async () => {
        if (contractService && account) {
            try {
                await contractService.sendTransaction('Staking', 'claim', account);
                showToast('Rewards claimed successfully', 'success');
            } catch (error) {
                console.error('Claim error:', error);
                showToast('Failed to claim rewards', 'error');
                throw error;
            }
        }
    };

    return { stake, unstake, claim };
};