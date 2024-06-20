import React from 'react';

const ConnectButton = () => {
    const handleConnectWallet = async () => {
        if (window.ethereum) {  // Check if MetaMask is installed
            try {
                await window.ethereum.request({ method: 'eth_requestAccounts' });  // Request account access
            } catch (error) {
                console.error('Connection failed', error);
            }
        } else {
            alert('Please install MetaMask!');
        }
    };

    return (
        <button onClick={handleConnectWallet}>Connect Wallet</button>
    );
};

export default ConnectButton;
