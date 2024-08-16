import { useState, useEffect } from 'react';
import Web3 from 'web3';
import { ContractService, createContractService } from '@/services/contractService';

export const useWeb3 = () => {
    const [web3, setWeb3] = useState<Web3 | null>(null);
    const [account, setAccount] = useState<string | null>(null);
    const [contractService, setContractService] = useState<ContractService | null>(null);
    const [isCorrectNetwork, setIsCorrectNetwork] = useState<boolean>(false);

    useEffect(() => {
        const initWeb3 = async () => {
            if (typeof window !== 'undefined' && typeof window.ethereum !== 'undefined') {
                try {
                    await window.ethereum.request({ method: 'eth_requestAccounts' });
                    const web3Instance = new Web3(window.ethereum);
                    setWeb3(web3Instance);
                    setContractService(createContractService(web3Instance));

                    const accounts = await web3Instance.eth.getAccounts();
                    setAccount(accounts[0]);

                    window.ethereum.on('accountsChanged', (accounts: string[]) => {
                        setAccount(accounts[0]);
                    });
                } catch (error) {
                    console.error('Error initializing web3', error);
                }
            } else {
                console.log('Please install MetaMask!');
            }
        };

        initWeb3();

        return () => {
            if (window.ethereum) {
                window.ethereum.removeAllListeners('accountsChanged');
            }
        };
    }, []);

    return { web3, account, contractService, isCorrectNetwork };
};