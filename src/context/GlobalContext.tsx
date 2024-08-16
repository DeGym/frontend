'use client';

import React, { createContext, useContext, useState, useEffect } from 'react';
import Web3 from 'web3';
import { AbiItem } from 'web3-utils';
import { Contract } from 'web3-eth-contract';
import { ErrorProvider } from './ErrorContext';

// Define the shape of our global state
interface GlobalState {
    web3: Web3 | null;
    account: string | null;
    networkId: number | null;
    isCorrectNetwork: boolean;
    contract: Contract<AbiItem[]> | null;
    balance: string | null;
}

// Create the context
const GlobalContext = createContext<GlobalState | undefined>(undefined);

// Create a provider component
export const GlobalProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const [state, setState] = useState<GlobalState>({
        web3: null,
        account: null,
        networkId: null,
        isCorrectNetwork: false,
        contract: null,
        balance: null,
    });

    useEffect(() => {
        const initWeb3 = async () => {
            if (typeof window !== 'undefined' && typeof window.ethereum !== 'undefined') {
                const web3 = new Web3(window.ethereum);
                try {
                    await window.ethereum.request({ method: 'eth_requestAccounts' });
                    const accounts = await web3.eth.getAccounts();
                    const networkId = await web3.eth.net.getId();
                    const balance = await web3.eth.getBalance(accounts[0]);

                    // Replace with your contract ABI and address
                    const contractABI: AbiItem[] = []; // Your contract ABI here
                    const contractAddress = ''; // Your contract address here
                    const contract = new web3.eth.Contract(contractABI, contractAddress);

                    setState({
                        web3,
                        account: accounts[0],
                        networkId: Number(networkId),
                        isCorrectNetwork: Number(networkId) === 841, // Taraxa network ID
                        contract,
                        balance: web3.utils.fromWei(balance, 'ether'),
                    });
                } catch (error) {
                    console.error('User denied account access or error occurred:', error);
                }
            } else {
                console.log('Please install MetaMask!');
            }
        };

        initWeb3();
    }, []);

    return (
        <ErrorProvider>
            <GlobalContext.Provider value={state}>
                {children}
            </GlobalContext.Provider>
        </ErrorProvider>
    );
};

// Create a custom hook for using the global state
export const useGlobalState = () => {
    const context = useContext(GlobalContext);
    if (context === undefined) {
        throw new Error('useGlobalState must be used within a GlobalProvider');
    }
    return context;
};

// Add this at the top of your file
declare global {
    interface Window {
        ethereum?: any;
    }
}