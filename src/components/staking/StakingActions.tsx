import React from 'react';
import StakingActionCard from './StakingActionCard';
import { useStakingContract } from '@/hooks/useStakingContract';
import styles from '@/styles/components/staking/StakingActions.module.css';

interface StakingActionsProps {
    availableToStakeDGYM: number;
    availableToUnstakeDGYM: number;
}

const StakingActions: React.FC<StakingActionsProps> = ({
    availableToStakeDGYM,
    availableToUnstakeDGYM,
}) => {
    const { stake, unstake, claim } = useStakingContract();

    return (
        <div className={styles.stakingActionsContainer}>
            <StakingActionCard
                title="Stake DGYM"
                description="Stake your DGYM tokens to participate in the staking program and earn rewards."
                actionLabel="Stake"
                maxAmount={availableToStakeDGYM}
                onAction={async (amount) => await stake(amount.toString())}
            />
            <StakingActionCard
                title="Unstake DGYM"
                description="Unstake your DGYM tokens to withdraw them from the staking program."
                actionLabel="Unstake"
                maxAmount={availableToUnstakeDGYM}
                onAction={async (amount) => await unstake(amount.toString())}
            />
            <StakingActionCard
                title="Claim Rewards"
                description="Claim your earned rewards from the staking program."
                actionLabel="Claim"
                maxAmount={0}
                onAction={async () => await claim()}
            />
        </div>
    );
};

export default StakingActions;