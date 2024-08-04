"use client";

import React, { createContext, useState, useEffect } from 'react';
import Web3 from 'web3';

export const WalletContext = createContext();

export const WalletProvider = ({ children }) => {
    const [walletAddress, setWalletAddress] = useState(null);
    const [isCorrectNetwork, setIsCorrectNetwork] = useState(false);
    const TARGET_NETWORK_ID = '841'; // Replace with the actual network ID for the right network

    const checkNetwork = async () => {
        if (window.ethereum) {
            const web3Instance = new Web3(window.ethereum);
            try {
                const networkId = await web3Instance.eth.net.getId();
                setIsCorrectNetwork(networkId.toString() === TARGET_NETWORK_ID);
            } catch (error) {
                console.error('Error checking network:', error);
            }
        }
    };

    useEffect(() => {
        checkNetwork();
    }, [walletAddress]);

    useEffect(() => {
        if (window.ethereum) {
            window.ethereum.on('networkChanged', checkNetwork);

            // Clean up the event listener on component unmount
            return () => {
                window.ethereum.removeListener('networkChanged', checkNetwork);
            };
        }
    }, []);

    return (
        <WalletContext.Provider value={{ walletAddress, setWalletAddress, isCorrectNetwork }}>
            {children}
        </WalletContext.Provider>
    );
};
