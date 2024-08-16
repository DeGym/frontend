import { useState, useEffect } from 'react';
import Web3 from 'web3';
import { useError } from '@/context/ErrorContext';
import { ContractService, createContractService } from '@/services/contractService';

export const useWeb3 = () => {
    const [web3, setWeb3] = useState<Web3 | null>(null);
    const [account, setAccount] = useState<string | null>(null);
    const [networkId, setNetworkId] = useState<number | null>(null);
    const [isCorrectNetwork, setIsCorrectNetwork] = useState(false);
    const [contractService, setContractService] = useState<ContractService | null>(null);
    const { setError } = useError();

    useEffect(() => {
        const initWeb3 = async () => {
            if (typeof window !== 'undefined' && typeof window.ethereum !== 'undefined') {
                const web3Instance = new Web3(window.ethereum);
                setWeb3(web3Instance);
                setContractService(createContractService(web3Instance));

                try {
                    await window.ethereum.request({ method: 'eth_requestAccounts' });
                    const accounts = await web3Instance.eth.getAccounts();
                    setAccount(accounts[0]);

                    const networkId = await web3Instance.eth.net.getId();
                    setNetworkId(Number(networkId));
                    setIsCorrectNetwork(Number(networkId) === 841); // Taraxa network ID

                    // Listen for account changes
                    window.ethereum.on('accountsChanged', (accounts: string[]) => {
                        setAccount(accounts[0]);
                    });

                    // Listen for network changes
                    window.ethereum.on('networkChanged', (networkId: string) => {
                        setNetworkId(Number(networkId));
                        setIsCorrectNetwork(Number(networkId) === 841);
                    });
                } catch (error) {
                    setError('Failed to connect to wallet. Please try again.');
                    console.error('User denied account access or error occurred:', error);
                }
            } else {
                setError('Please install MetaMask to use this application.');
            }
        };

        initWeb3();

        return () => {
            if (window.ethereum) {
                window.ethereum.removeAllListeners('accountsChanged');
                window.ethereum.removeAllListeners('networkChanged');
            }
        };
    }, [setError]);

    return { web3, account, networkId, isCorrectNetwork, contractService };
};