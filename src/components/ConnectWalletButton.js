import React, { useState, useEffect, useContext } from 'react';
import detectEthereumProvider from '@metamask/detect-provider';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown, faExclamationTriangle } from '@fortawesome/free-solid-svg-icons';
import styles from '../styles/components/ConnectWalletButton.module.css';
import { WalletContext } from '../utils/WalletContext';

const ConnectWalletButton = () => {
    const { walletAddress, setWalletAddress } = useContext(WalletContext);
    const [error, setError] = useState('');
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const [isCorrectNetwork, setIsCorrectNetwork] = useState(true);

    useEffect(() => {
        const checkNetwork = async () => {
            const provider = await detectEthereumProvider();
            if (provider) {
                const chainId = await provider.request({ method: 'eth_chainId' });
                setIsCorrectNetwork(chainId === '0x349'); // Taraxa chainId
            }
        };

        if (walletAddress) {
            checkNetwork();
        }

        const handleChainChanged = (chainId) => {
            setIsCorrectNetwork(chainId === '0x349');
        };

        if (window.ethereum) {
            window.ethereum.on('chainChanged', handleChainChanged);
        }

        return () => {
            if (window.ethereum) {
                window.ethereum.removeListener('chainChanged', handleChainChanged);
            }
        };
    }, [walletAddress]);

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
                    setIsCorrectNetwork(true);
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
        <div className={styles.walletContainer}>
            {walletAddress ? (
                <div
                    className={`${styles.walletInfo} ${!isCorrectNetwork ? styles.incorrectNetwork : ''}`}
                    onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                    onMouseEnter={() => setIsDropdownOpen(true)}
                    onMouseLeave={() => setIsDropdownOpen(false)}
                >
                    <div className={`${styles.icon} ${!isCorrectNetwork ? styles.iconIncorrectNetwork : ''}`}>
                        {isCorrectNetwork ? (
                            <img src="/img/hw/wallet.svg" alt="Wallet Icon" className="img-fluid d-block" />
                        ) : (
                            <FontAwesomeIcon icon={faExclamationTriangle} className={styles.warningIcon} />
                        )}
                    </div>
                    <div className={styles.walletAddress}>
                        {walletAddress.substring(0, 6)}...{walletAddress.substring(walletAddress.length - 4)}
                    </div>
                    <FontAwesomeIcon icon={faChevronDown} className={styles.chevronIcon} />
                    {isDropdownOpen && (
                        <div className={styles.dropdownMenu}>
                            <p><strong>Connected Address:</strong></p>
                            <p>{walletAddress}</p>
                            <button className={styles.disconnectButton} onClick={() => {
                                setWalletAddress(null);
                                setIsDropdownOpen(false);
                            }}>
                                Disconnect
                            </button>
                        </div>
                    )}
                </div>
            ) : (
                <button onClick={connectWallet} className={styles.connectButton}>
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
