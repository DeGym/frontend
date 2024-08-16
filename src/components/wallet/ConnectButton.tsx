import React from 'react';
import { useWalletConnection } from '@/hooks/useWalletConnection';
import LoadingSpinner from '@/components/common/LoadingSpinner';
import Button from '@/components/ui/Button';
import styles from '@/styles/components/wallet/ConnectButton.module.css';

const ConnectButton: React.FC = () => {
    const { connectWallet, error, isLoading } = useWalletConnection();

    return (
        <div className={styles.container}>
            <Button onClick={connectWallet} disabled={isLoading} variant="primary" size="medium">
                {isLoading ? (
                    <LoadingSpinner size="small" message="Connecting..." />
                ) : (
                    'Connect Wallet'
                )}
            </Button>
            {error && (
                <div className={styles.error}>{error}</div>
            )}
        </div>
    );
};

export default ConnectButton;