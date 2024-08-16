import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCopy, faSignOutAlt, faExternalLinkAlt } from '@fortawesome/free-solid-svg-icons';
import Modal from '@/components/ui/Modal';
import Button from '@/components/ui/Button';
import { useWeb3 } from '@/hooks/useWeb3';
import { useWalletConnection } from '@/hooks/useWalletConnection';
import shortenWalletAddress from '@/utils/generic';
import Jazzicon, { jsNumberForAddress } from 'react-jazzicon';
import TransactionList from './TransactionList';
import styles from '@/styles/components/wallet/WalletModal.module.css';

interface WalletModalProps {
    isOpen: boolean;
    onClose: () => void;
}

const WalletModal: React.FC<WalletModalProps> = ({ isOpen, onClose }) => {
    const { account } = useWeb3();
    const { disconnectWallet } = useWalletConnection();
    const [activeTokenType, setActiveTokenType] = useState<'ERC20' | 'ERC721'>('ERC20');

    const handleCopyAddress = () => {
        if (account) {
            navigator.clipboard.writeText(account);
        }
    };

    const handleDisconnect = () => {
        disconnectWallet();
        onClose();
    };

    if (!account) return null;

    return (
        <Modal isOpen={isOpen} onClose={onClose} title="Wallet Details">
            <div className={styles.walletInfo}>
                <Jazzicon diameter={100} seed={jsNumberForAddress(account)} />
                <p className={styles.address}><strong>{shortenWalletAddress(account)}</strong></p>
                <div className={styles.actions}>
                    <Button variant="outline" size="small" onClick={handleCopyAddress}>
                        <FontAwesomeIcon icon={faCopy} /> Copy Address
                    </Button>
                    <Button variant="outline" size="small" onClick={handleDisconnect}>
                        <FontAwesomeIcon icon={faSignOutAlt} /> Disconnect
                    </Button>
                </div>
            </div>
            <div className={styles.transactions}>
                <h3 className={styles.transactionsTitle}>Transactions</h3>
                <div className={styles.tokenTypeSwitch}>
                    <Button
                        variant={activeTokenType === 'ERC20' ? 'primary' : 'outline'}
                        size="small"
                        onClick={() => setActiveTokenType('ERC20')}
                    >
                        $DGYM
                    </Button>
                    <Button
                        variant={activeTokenType === 'ERC721' ? 'primary' : 'outline'}
                        size="small"
                        onClick={() => setActiveTokenType('ERC721')}
                    >
                        Voucher
                    </Button>
                </div>
                <TransactionList tokenType={activeTokenType} />
            </div>
            <a
                className={styles.explorerLink}
                href={`https://explorer.taraxa.io/address/${account}`}
                target="_blank"
                rel="noopener noreferrer"
            >
                View more on explorer <FontAwesomeIcon icon={faExternalLinkAlt} />
            </a>
        </Modal>
    );
};

export default WalletModal;