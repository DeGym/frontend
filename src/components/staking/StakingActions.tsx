import React, { useState } from 'react';
import StakingActionCard from './StakingActionCard';
import styles from '@/styles/components/staking/StakingActions.module.css';

interface StakingActionsProps {
    availableToStakeDGYM: number;
    availableToUnstakeDGYM: number;
    onStake: (amount: number, duration: number, isCompound: boolean) => void;
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
    const [stakeAmount, setStakeAmount] = useState(0);
    const [unstakeAmount, setUnstakeAmount] = useState(0);
    const [duration, setDuration] = useState(0);
    const [isCompound, setIsCompound] = useState(false);

    const handleStake = () => {
        onStake(stakeAmount, duration, isCompound);
    };

    const handleUnstake = () => {
        onUnstake(unstakeAmount);
    };

    return (
        <div className={styles.stakingActionsContainer}>
            <StakingActionCard
                title="Stake DGYM"
                description="Stake your DGYM tokens to participate in the staking program and earn rewards."
                amount={stakeAmount}
                maxAmount={availableToStakeDGYM}
                onAmountChange={setStakeAmount}
                onAction={handleStake}
                actionLabel="Stake"
            >
                <div className={styles.stakingOptions}>
                    <div className={styles.stakingOption}>
                        <label>
                            <input
                                type="radio"
                                checked={!isCompound}
                                onChange={() => setIsCompound(false)}
                            />
                            <span>Simple</span>
                        </label>
                    </div>
                    <div className={styles.stakingOption}>
                        <label>
                            <input
                                type="radio"
                                checked={isCompound}
                                onChange={() => setIsCompound(true)}
                            />
                            <span>Compound</span>
                        </label>
                    </div>
                </div>
                <div className={styles.durationSelector}>
                    <label htmlFor="duration">Lock Duration (days):</label>
                    <input
                        type="number"
                        id="duration"
                        value={duration}
                        onChange={(e) => setDuration(parseInt(e.target.value))}
                        min={0}
                        step={1}
                    />
                </div>
            </StakingActionCard>

            <StakingActionCard
                title="Unstake DGYM"
                description="Unstake your DGYM tokens to withdraw them from the staking program."
                amount={unstakeAmount}
                maxAmount={availableToUnstakeDGYM}
                onAmountChange={setUnstakeAmount}
                onAction={handleUnstake}
                actionLabel="Unstake"
            />

            <StakingActionCard
                title="Claim Rewards"
                description="Claim your earned rewards from the staking program."
                amount={0}
                maxAmount={0}
                onAmountChange={() => { }}
                onAction={onClaim}
                actionLabel="Claim"
            >
                <p className={styles.claimDescription}>
                    You can claim your rewards at any time without affecting your staked amount.
                </p>
            </StakingActionCard>
        </div>
    );
};

export default StakingActions;