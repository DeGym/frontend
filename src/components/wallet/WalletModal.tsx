import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCopy, faSignOutAlt, faExternalLinkAlt, faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import BaseModal from '@/components/common/BaseModal';
import Jazzicon, { jsNumberForAddress } from 'react-jazzicon';
import styles from '@/styles/components/wallet/WalletModal.module.css';
import { useToast } from '@/context/ToastContext';
import Switch from '@/components/ui/Switch';
import TransactionHistory from '@/components/TransactionHistory';

interface WalletModalProps {
    isOpen: boolean;
    onClose: () => void;
    address: string | null;
    balance: string | null;
    onDisconnect: () => void;
}

const WalletModal: React.FC<WalletModalProps> = ({ isOpen, onClose, address, balance, onDisconnect }) => {
    const [activeTokenType, setActiveTokenType] = useState<'ERC20' | 'ERC721'>('ERC20');
    const { showToast } = useToast();
    const [copied, setCopied] = useState(false);

    const handleCopyAddress = () => {
        if (address) {
            navigator.clipboard.writeText(address);
            setCopied(true);
            showToast('Address copied to clipboard', 'success');
            setTimeout(() => setCopied(false), 3000);
        }
    };

    const handleTokenTypeChange = () => {
        setActiveTokenType(prev => prev === 'ERC20' ? 'ERC721' : 'ERC20');
    };

    const formatAmount = (amount: number) => {
        return Number(amount.toFixed(4)).toString();
    };

    return (
        <BaseModal isOpen={isOpen} onClose={onClose} title="Wallet Details">
            <div className={styles.modalContent}>
                <div className={styles.walletInfo}>
                    {address && (
                        <>
                            <div className={styles.jazzIconContainer}>
                                <Jazzicon diameter={80} seed={jsNumberForAddress(address)} />
                            </div>
                            <div className={styles.addressBalanceContainer}>
                                <p className={styles.walletAddress}>{`${address.slice(0, 6)}...${address.slice(-4)}`}</p>
                                <p className={styles.balance}>{balance ? `${formatAmount(parseFloat(balance))} TARA` : '0 TARA'}</p>
                            </div>
                        </>
                    )}
                </div>
                <div className={styles.modalButtons}>
                    <button className={styles.modalButton} onClick={handleCopyAddress}>
                        <FontAwesomeIcon icon={copied ? faCheckCircle : faCopy} className={styles.buttonIcon} />
                        <span>{copied ? 'Copied' : 'Copy Address'}</span>
                    </button>
                    <button className={styles.modalButton} onClick={onDisconnect}>
                        <FontAwesomeIcon icon={faSignOutAlt} className={styles.buttonIcon} />
                        <span>Disconnect</span>
                    </button>
                </div>
                <div className={styles.transactionsSection}>
                    <h3 className={styles.transactionsLabel}>Transactions</h3>
                    <div className={styles.switchButtonContainer}>
                        <Switch
                            leftLabel="$DGYM"
                            rightLabel="Voucher"
                            isChecked={activeTokenType === 'ERC721'}
                            onChange={handleTokenTypeChange}
                        />
                    </div>
                    <div className={styles.transactionsList}>
                        <TransactionHistory activeTokenType={activeTokenType} />
                    </div>
                </div>
                {address && (
                    <div className={styles.explorerButtonContainer}>
                        <a className={styles.explorerButton} href={`https://explorer.taraxa.io/address/${address}`} target="_blank" rel="noopener noreferrer">
                            View full history on explorer
                        </a>
                        <FontAwesomeIcon icon={faExternalLinkAlt} className={styles.explorerIcon} />
                    </div>
                )}
            </div>
        </BaseModal>
    );
};

export default WalletModal;