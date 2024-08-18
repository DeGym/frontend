import React, { useState } from 'react';
import { useWallet } from '@/context/WalletContext';
import styles from '@/styles/components/wallet/ConnectWalletButton.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWallet, faExclamationTriangle } from '@fortawesome/free-solid-svg-icons';
import WalletModal from './WalletModal';
import LoadingModal from '@/components/common/LoadingModal';

const ConnectWalletButton: React.FC = () => {
    const { connectWallet, disconnectWallet, account, isCorrectNetwork, balance, switchNetwork } = useWallet();
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [isLoading, setIsLoading] = useState(false);

    const handleClick = async () => {
        if (account) {
            if (!isCorrectNetwork) {
                setIsLoading(true);
                await switchNetwork();
                setIsLoading(false);
            } else {
                setIsModalOpen(true);
            }
        } else {
            setIsLoading(true);
            await connectWallet();
            setIsLoading(false);
        }
    };

    const handleDisconnect = async () => {
        await disconnectWallet();
        setIsModalOpen(false);
    };

    return (
        <>
            <button
                onClick={handleClick}
                className={`${styles.connectButton} ${!isCorrectNetwork && account ? styles.incorrectNetwork : ''}`}
            >
                <FontAwesomeIcon
                    icon={account ? (isCorrectNetwork ? faWallet : faExclamationTriangle) : faWallet}
                    className={styles.walletIcon}
                />
                <span className={styles.buttonText}>
                    {account
                        ? (isCorrectNetwork
                            ? `${account.slice(0, 6)}...${account.slice(-4)}`
                            : 'Switch Network')
                        : 'Connect Wallet'}
                </span>
            </button>
            {account && isCorrectNetwork && (
                <WalletModal
                    isOpen={isModalOpen}
                    onClose={() => setIsModalOpen(false)}
                    address={account}
                    balance={balance}
                    onDisconnect={handleDisconnect}
                />
            )}
            <LoadingModal isOpen={isLoading} message={account ? "Switching network..." : "Connecting wallet..."} />
        </>
    );
};

export default ConnectWalletButton;