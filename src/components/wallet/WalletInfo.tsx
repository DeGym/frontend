import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown, faExclamationTriangle } from '@fortawesome/free-solid-svg-icons';
import { useWeb3 } from '@/hooks/useWeb3';
import shortenWalletAddress from '@/utils/generic';
import WalletModal from './WalletModal';
import Card from '@/components/ui/Card';
import styles from '@/styles/components/wallet/WalletInfo.module.css';

const WalletInfo: React.FC = () => {
    const { account, isCorrectNetwork } = useWeb3();
    const [isModalOpen, setIsModalOpen] = useState(false);

    return (
        <>
            <Card
                className={`${styles.walletInfo} ${!isCorrectNetwork ? styles.incorrectNetwork : ''}`}
            >
                <div
                    className={`${styles.icon} ${!isCorrectNetwork ? styles.iconIncorrectNetwork : ''}`}
                    onClick={() => setIsModalOpen(true)}
                >
                    {isCorrectNetwork ? (
                        <img src="/img/hw/wallet.svg" alt="Wallet Icon" className={styles.walletIcon} />
                    ) : (
                        <FontAwesomeIcon icon={faExclamationTriangle} className={styles.warningIcon} />
                    )}
                </div>
                <div className={styles.walletAddress}>
                    {shortenWalletAddress(account)}
                </div>
                <FontAwesomeIcon icon={faChevronDown} className={styles.chevronIcon} />
            </Card>

            <WalletModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
        </>
    );
};

export default WalletInfo;