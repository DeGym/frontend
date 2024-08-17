import React from 'react';
import AmountInput from '@/components/ui/AmountInput';
import styles from '@/styles/components/staking/StakingActionCard.module.css';

interface StakingActionCardProps {
    title: string;
    description: string;
    amount: number;
    maxAmount: number;
    onAmountChange: (value: number) => void;
    onAction: () => void;
    actionLabel: string;
    children?: React.ReactNode;
}

const StakingActionCard: React.FC<StakingActionCardProps> = ({
    title,
    description,
    amount,
    maxAmount,
    onAmountChange,
    onAction,
    actionLabel,
    children
}) => {
    return (
        <div className={styles.stakingAction}>
            <h3 className={styles.stakingActionTitle}>{title}</h3>
            <p className={styles.stakingActionDescription}>{description}</p>
            <div className={styles.stakingActionAmount}>
                <AmountInput
                    maxAmount={maxAmount}
                    onChange={onAmountChange}
                />
            </div>
            {children}
            <button className={styles.stakingActionBtn} onClick={onAction}>
                {actionLabel}
            </button>
        </div>
    );
};

export default StakingActionCard;