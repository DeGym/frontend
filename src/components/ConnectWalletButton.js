import React, { useState } from 'react';
import detectEthereumProvider from '@metamask/detect-provider';

const ConnectWalletButton = () => {
    const [walletAddress, setWalletAddress] = useState(null);
    const [error, setError] = useState('');

    const connectWallet = async () => {
        const provider = await detectEthereumProvider();

        if (provider) {
            if (provider !== window.ethereum) {
                setError('Multiple wallets detected. Please ensure MetaMask is the active wallet.');
                return;
            }
            try {
                await provider.request({ method: 'eth_requestAccounts' });
                await provider.request({
                    method: 'wallet_addEthereumChain',
                    params: [{
                        chainId: '0x349', // Hexadecimal equivalent of 841
                        rpcUrls: ['https://rpc.mainnet.taraxa.io'],
                        chainName: 'Taraxa Mainnet',
                    }]
                });
                const accounts = await provider.request({ method: 'eth_accounts' });
                if (accounts.length > 0) {
                    setWalletAddress(accounts[0]);
                    setError('');
                }
            } catch (error) {
                setError('Failed to connect wallet. Please try again.');
                console.error('User denied account access or error occurred:', error);
            }
        } else {
            setError('Please install MetaMask!');
        }
    };

    return (
        <div>
            {walletAddress ? (
                <div style={{ color: '#2dff73', marginTop: '10px' }}>
                    <strong>Wallet Connected:</strong> {walletAddress.substring(0, 6)}...{walletAddress.substring(walletAddress.length - 4)}
                </div>
            ) : (
                <button onClick={connectWallet} style={{
                    padding: '10px 20px',
                    fontSize: '16px',
                    borderRadius: '5px',
                    backgroundColor: '#2dff73',
                    color: 'black',
                    border: 'none',
                    cursor: 'pointer'
                }}>
                    Connect Wallet
                </button>
            )}
            {error && (
                <div style={{ color: 'red', marginTop: '10px' }}>
                    {error}
                </div>
            )}
        </div>
    );
};

export default ConnectWalletButton;
