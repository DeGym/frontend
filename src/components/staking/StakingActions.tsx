import React from 'react';
import StakingActionCard from './StakingActionCard';
import styles from '@/styles/components/staking/StakingActions.module.css';

interface StakingActionsProps {
    availableToStakeDGYM: number;
    availableToUnstakeDGYM: number;
    onStake: (amount: number) => void;
    onUnstake: (amount: number) => void;
    onClaim: () => void;
}

const StakingActions: React.FC<StakingActionsProps> = ({
    availableToStakeDGYM,
    availableToUnstakeDGYM,
    onStake,
    onUnstake,
    onClaim,
}) => {
    return (
        <div className={styles.stakingActionsContainer}>
            <StakingActionCard
                title="Stake DGYM"
                description="Stake your DGYM tokens to participate in the staking program and earn rewards."
                actionLabel="Stake"
                maxAmount={availableToStakeDGYM}
                onAction={onStake}
            />
            <StakingActionCard
                title="Unstake DGYM"
                description="Unstake your DGYM tokens to withdraw them from the staking program."
                actionLabel="Unstake"
                maxAmount={availableToUnstakeDGYM}
                onAction={onUnstake}
            />
            <StakingActionCard
                title="Claim Rewards"
                description="Claim your earned rewards from the staking program."
                actionLabel="Claim"
                maxAmount={0}
                onAction={onClaim}
            />
        </div>
    );
};

export default StakingActions;