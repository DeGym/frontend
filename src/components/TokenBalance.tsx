import React, { useEffect } from 'react';
import { useWeb3 } from '@/hooks/useWeb3';
import { useTokenContract } from '@/hooks/useTokenContract';
import Card from '@/components/ui/Card';
import Button from '@/components/ui/Button';
import styles from '@/styles/components/TokenBalance.module.css';

const TokenBalance: React.FC = () => {
    const { user } = useWeb3();
    const { balance, getBalance } = useTokenContract();

    useEffect(() => {
        if (user.address) {
            getBalance(user.address);
        }
    }, [user.address, getBalance]);

    const handleRefresh = () => {
        if (user.address) {
            getBalance(user.address);
        }
    };

    return (
        <Card className={styles.tokenBalance}>
            <h3 className={styles.balanceTitle}>Your Token Balance</h3>
            <p className={styles.balanceAmount}>{balance ? `${balance} DGYM` : 'Loading...'}</p>
            <Button variant="outline" size="small" onClick={handleRefresh}>
                Refresh Balance
            </Button>
        </Card>
    );
};

export default TokenBalance;