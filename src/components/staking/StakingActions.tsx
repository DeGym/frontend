import React, { useState } from 'react';
import BaseModal from '@/components/common/BaseModal';
import InfoTooltip from '@/components/ui/InfoTooltip';
import AmountInput from '@/components/ui/AmountInput';
import styles from '@/styles/components/staking/StakingActions.module.css';

interface StakingActionsProps {
    availableToStakeDGYM: number;
    availableToUnstakeDGYM: number;
    onStake: (amount: number, duration: number, isCompound: boolean) => void;
    onUnstake: (amount: number) => void;
    onClaimDGYM: () => void;
    isAutoInterest: boolean;
    staking_yield?: number;
    rewards?: { DGYM: number; USDT: number };
}

const StakingActions: React.FC<StakingActionsProps> = ({
    availableToStakeDGYM,
    availableToUnstakeDGYM,
    onStake,
    onUnstake,
    onClaimDGYM,
    isAutoInterest,
    staking_yield = 0.17,
    rewards = { DGYM: 0, USDT: 0 }
}) => {
    const [stakeAmount, setStakeAmount] = useState<number>(0);
    const [unstakeAmount, setUnstakeAmount] = useState<number>(0);
    const [duration, setDuration] = useState<number>(1);
    const [isStakeModalOpen, setIsStakeModalOpen] = useState<boolean>(false);
    const [isUnstakeModalOpen, setIsUnstakeModalOpen] = useState<boolean>(false);
    const [interestMode, setInterestMode] = useState<'simple' | 'compound'>(isAutoInterest ? 'compound' : 'simple');

    const apr = staking_yield;
    const apy = Math.pow(1 + staking_yield / 365, 365) - 1;

    const handleStake = () => {
        if (stakeAmount <= 0 || stakeAmount > availableToStakeDGYM) {
            alert('Invalid stake amount');
            return;
        }
        if (duration <= 0) {
            alert('Invalid duration');
            return;
        }
        onStake(stakeAmount, duration, interestMode === 'compound');
        setStakeAmount(0);
        setDuration(1);
        setIsStakeModalOpen(false);
    };

    const handleUnstake = () => {
        if (unstakeAmount <= 0 || unstakeAmount > availableToUnstakeDGYM) {
            alert('Invalid unstake amount');
            return;
        }
        onUnstake(unstakeAmount);
        setUnstakeAmount(0);
        setIsUnstakeModalOpen(false);
    };

    const calculateUnlockDate = (weeks: number): string => {
        const unlockDate = new Date();
        unlockDate.setDate(unlockDate.getDate() + weeks * 7);
        return unlockDate.toLocaleDateString();
    };

    const calculateExpectedROI = (amount: number, weeks: number, autoInterest: boolean): string => {
        const days = weeks * 7;
        if (autoInterest) {
            const dailyRate = Math.pow(1 + apy, 1 / 365) - 1;
            return (amount * Math.pow(1 + dailyRate, days) - amount).toFixed(2);
        } else {
            return (amount * apr * (days / 365)).toFixed(2);
        }
    };

    const toggleInterestMode = (mode: 'simple' | 'compound') => {
        setInterestMode(mode);
    };

    const renderCard = (title: string, value: number | string, buttonText: string, onClick: () => void) => (
        <div className={styles.card}>
            <h3>{title}</h3>
            <p className={styles.cardValue}>{value} DGYM</p>
            <button className={styles.cardButton} onClick={onClick}>{buttonText}</button>
        </div>
    );

    const renderStakeModal = () => (
        <BaseModal
            isOpen={isStakeModalOpen}
            onClose={() => setIsStakeModalOpen(false)}
            title="Stake DGYM"
        >
            <div className="max-w-80">
                <div className="align-middle">
                    <h3>Available DGYM for stake: <b>{availableToStakeDGYM}</b>
                        <InfoTooltip text="Enter the amount of DGYM you want to stake." />
                    </h3>
                </div>
                <AmountInput maxAmount={availableToStakeDGYM} onChange={setStakeAmount} />
                <div className={styles.durationSection}>
                    <h3>Duration (in weeks)
                        <InfoTooltip text="Enter the duration for which you want to stake your DGYM." />
                    </h3>
                    <div className={styles.inputGroup}>
                        <input
                            type="number"
                            value={duration}
                            min={1}
                            onChange={(e) => setDuration(Number(e.target.value))}
                            placeholder="Enter weeks..."
                        />
                    </div>
                    <div className={styles.durationButtons}>
                        {[1, 5, 10, 25, 52].map(weeks => (
                            <button key={weeks} onClick={() => setDuration(weeks)}>{weeks}W</button>
                        ))}
                    </div>
                </div>
                <div className={styles.interestToggle}>
                    <h3>Compound Mode</h3>
                    <div className={styles.interestToggleButtons}>
                        {['simple', 'compound'].map(mode => (
                            <button
                                key={mode}
                                className={`${styles.toggleButton} ${interestMode === mode ? styles.active : ''}`}
                                onClick={() => toggleInterestMode(mode as 'simple' | 'compound')}
                            >
                                {mode === 'simple' ? 'Manual' : 'Auto'}
                            </button>
                        ))}
                    </div>
                </div>
                <div className={styles.lockOverviewCard}>
                    <h3>LOCK <b>OVERVIEW</b></h3>
                    <p><b>DGYM TO BE LOCKED:</b> {stakeAmount} DGYM</p>
                    <p><b>INTEREST RATE:</b> {interestMode === 'compound' ? '17% APY' : '17% APR'}</p>
                    <p><b>DURATION:</b> {duration * 7} days</p>
                    <p><b>UNLOCK ON:</b> {calculateUnlockDate(duration)}</p>
                    <p><b>EXPECTED ROI:</b> {calculateExpectedROI(stakeAmount, duration, interestMode === 'compound')} DGYM</p>
                </div>
                <button className={styles.actionButton} onClick={handleStake}>Stake</button>
                <button className={styles.modalCloseButton} onClick={() => setIsStakeModalOpen(false)}>Close</button>
            </div>
        </BaseModal>
    );

    const renderUnstakeModal = () => (
        <BaseModal
            isOpen={isUnstakeModalOpen}
            onClose={() => setIsUnstakeModalOpen(false)}
            title="Unstake DGYM"
        >
            <div className="max-w-80">
                <p>Available DGYM for unstake: <b>{availableToUnstakeDGYM}</b></p>
                <AmountInput maxAmount={availableToUnstakeDGYM} onChange={(value) => setUnstakeAmount(Number(value))} />
                <button className={styles.actionButton} onClick={handleUnstake}>Unstake</button>
                <button className={styles.modalCloseButton} onClick={() => setIsUnstakeModalOpen(false)}>Close</button>
            </div>
        </BaseModal>
    );

    return (
        <div className={styles.stakingActions}>
            <div className={styles.cardContainer}>
                {renderCard("Available to stake", availableToStakeDGYM, "Stake", () => setIsStakeModalOpen(true))}
                {renderCard("Available to unstake", availableToUnstakeDGYM, "Unstake", () => setIsUnstakeModalOpen(true))}
                {renderCard("Claimable Rewards", rewards.DGYM, "Claim", onClaimDGYM)}
            </div>
            {renderStakeModal()}
            {renderUnstakeModal()}
        </div>
    );
};

export default StakingActions;