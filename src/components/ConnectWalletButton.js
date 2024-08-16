"use client"

import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown, faExclamationTriangle, faSpinner, faCopy, faSignOutAlt, faExternalLinkAlt } from '@fortawesome/free-solid-svg-icons';
import styles from '@/styles/components/ConnectWalletButton.module.css';
import shortenWalletAddress from '@/utils/generic';
import BaseModal from '@/components/BaseModal';
import Jazzicon, { jsNumberForAddress } from 'react-jazzicon';
import { useGlobalState } from '@/context/GlobalContext';

const mockTransactions = {
    ERC20: [
        { id: 1, amount: 1000, hash: '0x1234567890abcdef1234567890abcdef1234567890abcdef1234567890abcdef' },
    ],
    ERC721: [
        { id: 1, tokenId: 1, hash: '0x1234567890abcdef1234567890abcdef1234567890abcdef1234567890abcdef' },
    ],
};

const ConnectWalletButton = () => {
    const { web3, account, isCorrectNetwork, balance } = useGlobalState();
    const [error, setError] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [activeTokenType, setActiveTokenType] = useState('ERC20');

    const connectWallet = async () => {
        setIsLoading(true);
        if (window.ethereum) {
            try {
                await window.ethereum.request({ method: 'eth_requestAccounts' });
                setError('');
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
        navigator.clipboard.writeText(account);
    };

    const handleDisconnect = () => {
        setAccount(null);
        setIsModalOpen(false);
    };

    const handleToggleTransactions = (tokenType) => {
        setActiveTokenType(tokenType);
    };

    return (
        <div className={styles.walletContainer}>
            {account ? (
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
                            {shortenWalletAddress(account)}
                        </div>
                        <FontAwesomeIcon icon={faChevronDown} className={styles.chevronIcon} />
                    </div>

                    <BaseModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} title="Wallet Details">
                        <div className={styles.modalContent}>
                            <Jazzicon diameter={100} seed={jsNumberForAddress(account)} />
                            <p className={styles.walletAddressModal}><strong>{shortenWalletAddress(account)}</strong></p>
                            <p className={styles.balance}>{balance !== null ? (balance >= 1000 ? `${(balance / 1000).toFixed(1)}K` : balance) : 'Loading...'} TARA</p>
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
                                            <p>{activeTokenType === 'ERC20' ? tx.amount : `Token ID: ${tx.tokenId}`}</p>
                                            <a href={`https://explorer.taraxa.io/tx/${tx.hash}`} target="_blank" rel="noopener noreferrer">
                                                View on Explorer <FontAwesomeIcon icon={faExternalLinkAlt} />
                                            </a>
                                        </div>
                                    ))
                                ) : (
                                    <p className={styles.noTransactions}>No transactions available</p>
                                )}
                            </div>
                            <a className={styles.explorerButton} href={`https://explorer.taraxa.io/address/${account}`} target="_blank" rel="noopener noreferrer">
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