import React from 'react';
import { useWallet } from '@/context/WalletContext';
import BaseModal from '@/components/common/BaseModal';
import styles from '@/styles/components/wallet/WalletInfoModal.module.css';

interface WalletInfoModalProps {
    isOpen: boolean;
    onClose: () => void;
}

const WalletInfoModal: React.FC<WalletInfoModalProps> = ({ isOpen, onClose }) => {
    const { account, isCorrectNetwork, disconnectWallet } = useWallet();

    const handleDisconnect = () => {
        disconnectWallet();
        onClose();
    };

    return (
        <BaseModal isOpen={isOpen} onClose={onClose} title="Wallet Information">
            <div className={styles.walletInfo}>
                <p><strong>Address:</strong> {account}</p>
                <p><strong>Network:</strong> {isCorrectNetwork ? 'Correct' : 'Incorrect'}</p>
                <button onClick={handleDisconnect} className={styles.disconnectButton}>
                    Disconnect Wallet
                </button>
            </div>
        </BaseModal>
    );
};

export default WalletInfoModal;