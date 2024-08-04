"use client"

import React, { useState, useEffect, useContext } from 'react';
import Web3 from 'web3';
import detectEthereumProvider from '@metamask/detect-provider';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown, faExclamationTriangle, faSpinner, faCopy, faSignOutAlt, faExternalLinkAlt } from '@fortawesome/free-solid-svg-icons';
import styles from '@/styles/components/ConnectWalletButton.module.css';
import { WalletContext } from '@/utils/WalletContext';
import shortenWalletAddress from '@/utils/generic';
import BaseModal from '@/components/BaseModal';
import Jazzicon, { jsNumberForAddress } from 'react-jazzicon';

const mockTransactions = {
    ERC20: [
        { id: 1, amount: '1000 DGYM', hash: '0x1a2b3c4d' },
        { id: 2, amount: '2000 DGYM', hash: '0x5e6f7g8h' },
    ],
    ERC721: [
        { id: 1, tokenId: '123', hash: '0x9i0j1k2l' },
        { id: 2, tokenId: '456', hash: '0x3m4n5o6p' },
    ],
};

const ConnectWalletButton = () => {
    const { walletAddress, setWalletAddress, isCorrectNetwork, setIsCorrectNetwork } = useContext(WalletContext);
    const [error, setError] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [balance, setBalance] = useState(0);
    const [activeTokenType, setActiveTokenType] = useState('ERC20');

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
    }, [walletAddress, setIsCorrectNetwork]);

    useEffect(() => {
        if (walletAddress && window.ethereum) {
            const web3Instance = new Web3(window.ethereum);
            web3Instance.eth.getBalance(walletAddress)
                .then(balance => {
                    setBalance(parseFloat(web3Instance.utils.fromWei(balance, 'ether')).toFixed(4));
                })
                .catch(error => {
                    console.error('Error fetching balance:', error);
                    setError('Failed to fetch balance. Please try again.');
                });
        }
    }, [walletAddress]);

    const connectWallet = async () => {
        setIsLoading(true);
        const provider = await detectEthereumProvider();

        if (provider) {
            if (provider !== window.ethereum) {
                setError('Multiple wallets detected. Please ensure MetaMask is the active wallet.');
                setIsLoading(false);
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
                } else {
                    setError('No accounts found. Please try again.');
                }
            } catch (error) {
                setError('Failed to connect wallet. Please try again.');
                console.error('User denied account access or error occurred:', error);
            }
        } else {
            setError('Please install MetaMask!');
        }
        setIsLoading(false);
    };

    const handleCopyAddress = () => {
        navigator.clipboard.writeText(walletAddress);
    };

    const handleDisconnect = () => {
        setWalletAddress(null);
        setIsModalOpen(false);
    };

    const handleToggleTransactions = (tokenType) => {
        setActiveTokenType(tokenType);
    };

    return (
        <div className={styles.walletContainer}>
            {walletAddress ? (
                <>
                    <div
                        className={`${styles.walletInfo} ${!isCorrectNetwork ? styles.incorrectNetwork : ''}`}
                        onClick={() => setIsModalOpen(true)}
                    >
                        <div className={`${styles.icon} ${!isCorrectNetwork ? styles.iconIncorrectNetwork : ''}`}>
                            {isCorrectNetwork ? (
                                <img src="/img/hw/wallet.svg" alt="Wallet Icon" className="img-fluid d-block" />
                            ) : (
                                <FontAwesomeIcon icon={faExclamationTriangle} className={styles.warningIcon} />
                            )}
                        </div>
                        <div className={styles.walletAddress}>
                            {shortenWalletAddress(walletAddress)}
                        </div>
                        <FontAwesomeIcon icon={faChevronDown} className={styles.chevronIcon} />
                    </div>

                    <BaseModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} title="Wallet Details">
                        <div className={styles.modalContent}>
                            <Jazzicon diameter={100} seed={jsNumberForAddress(walletAddress)} />
                            <p className={styles.walletAddressModal}><strong>{shortenWalletAddress(walletAddress)}</strong></p>
                            <p className={styles.balance}>{balance >= 1000 ? `${(balance / 1000).toFixed(1)}K` : balance} TARA</p>
                            <div className={styles.modalButtons}>
                                <button className={styles.modalButton} onClick={handleCopyAddress}>
                                    <FontAwesomeIcon icon={faCopy} /><br />Copy Address
                                </button>
                                <button className={styles.modalButton} onClick={handleDisconnect}>
                                    <FontAwesomeIcon icon={faSignOutAlt} /><br />Disconnect
                                </button>
                            </div>
                            <div className={styles.transactionsLabel}>Transactions</div>
                            <div className={styles.switchButtonContainer}>
                                <button
                                    className={`${styles.switchButton} ${activeTokenType === 'ERC20' ? styles.activeSwitchButton : ''}`}
                                    onClick={() => handleToggleTransactions('ERC20')}
                                >
                                    $DGYM
                                </button>
                                <button
                                    className={`${styles.switchButton} ${activeTokenType === 'ERC721' ? styles.activeSwitchButton : ''}`}
                                    onClick={() => handleToggleTransactions('ERC721')}
                                >
                                    Voucher
                                </button>
                            </div>
                            <div className={styles.transactionsList}>
                                {mockTransactions[activeTokenType].length > 0 ? (
                                    mockTransactions[activeTokenType].map(tx => (
                                        <div key={tx.id} className={styles.transactionItem}>
                                            <p>{activeTokenType === 'ERC20' ? tx.amount : tx.tokenId}</p>
                                            <a href={`https://explorer.taraxa.io/tx/${tx.hash}`} target="_blank" rel="noopener noreferrer">
                                                <FontAwesomeIcon icon={faExternalLinkAlt} />
                                            </a>
                                        </div>
                                    ))
                                ) : (
                                    <p className={styles.noTransactions}>No transactions available</p>
                                )}
                            </div>
                            <a className={styles.explorerButton} href={`https://explorer.taraxa.io/address/${walletAddress}`} target="_blank" rel="noopener noreferrer">
                                View more on explorer <FontAwesomeIcon icon={faExternalLinkAlt} />
                            </a>
                        </div>
                    </BaseModal>
                </>
            ) : (
                <button onClick={connectWallet} className={styles.connectButton} disabled={isLoading}>
                    {isLoading ? (
                        <FontAwesomeIcon icon={faSpinner} className={styles.loadingSpinner} spin />
                    ) : (
                        'Connect Wallet'
                    )}
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
