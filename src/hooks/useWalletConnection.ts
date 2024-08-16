import { useState } from 'react';
import { useWeb3 } from './useWeb3';

export const useWalletConnection = () => {
    const { web3, account } = useWeb3();
    const [error, setError] = useState<string | null>(null);
    const [isLoading, setIsLoading] = useState(false);

    const connectWallet = async () => {
        setIsLoading(true);
        setError(null);

        if (web3) {
            try {
                await window.ethereum.request({ method: 'eth_requestAccounts' });
            } catch (error) {
                setError('Failed to connect wallet. Please try again.');
                console.error('User denied account access or error occurred:', error);
            }
        } else {
            setError('Please install MetaMask!');
        }

        setIsLoading(false);
    };

    const disconnectWallet = () => {
        // Note: There's no standard way to programmatically disconnect a wallet.
        // This function is more about resetting the local state.
        // The user would need to disconnect their wallet manually in MetaMask.
        console.log('Wallet disconnected');
    };

    return { connectWallet, disconnectWallet, error, isLoading, isConnected: !!account };
};