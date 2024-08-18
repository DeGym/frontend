import React, { useState } from 'react';
import { useWallet } from '@/context/WalletContext';
import styles from '@/styles/components/wallet/ConnectWalletButton.module.css';
import WalletModal from './WalletModal';
import LoadingModal from '@/components/common/LoadingModal';
import Image from 'next/image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faExchangeAlt } from '@fortawesome/free-solid-svg-icons';

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
                className={`${styles.connectButton} ${account && isCorrectNetwork ? styles.connectedButton : ''} ${account && !isCorrectNetwork ? styles.incorrectNetwork : ''}`}
            >
                {account && isCorrectNetwork ? (
                    <>
                        <div className={styles.walletIconWrapper}>
                            <Image
                                src="/img/hw/wallet.svg"
                                alt="Wallet Icon"
                                width={24}
                                height={24}
                                className={styles.walletIcon}
                            />
                        </div>
                        <span className={styles.buttonText}>
                            {`${account.slice(0, 6)}...${account.slice(-4)}`}
                        </span>
                    </>
                ) : account && !isCorrectNetwork ? (
                    <>
                        <div className={styles.walletIconWrapper}>
                            <FontAwesomeIcon icon={faExchangeAlt} className={styles.switchIcon} />
                        </div>
                        <span className={styles.buttonText}>
                            Switch Network
                        </span>
                    </>
                ) : (
                    <span className={styles.buttonText}>
                        Connect Wallet
                    </span>
                )}
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