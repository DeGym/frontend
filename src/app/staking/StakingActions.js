import React, { useState } from 'react';
import Modal from 'react-modal';
import styles from '@/styles/components/StakingActions.module.css';
import InfoTooltip from '@/components/InfoTooltip';
import AmountInput from '@/components/AmountInput';

const StakingActions = ({
    availableToStakeDGYM,
    availableToUnstakeDGYM,
    onStake,
    onUnstake,
    onClaimUSDT,
    onClaimDGYM,
    isAutoInterest,
    staking_yield = 0.17,
    rewards = { DGYM: 0, USDT: 0 }
}) => {
    const [stakeAmount, setStakeAmount] = useState(0);
    const [unstakeAmount, setUnstakeAmount] = useState('');
    const [duration, setDuration] = useState(1);
    const [isStakeModalOpen, setIsStakeModalOpen] = useState(false);
    const [isUnstakeModalOpen, setIsUnstakeModalOpen] = useState(false);
    const [interestMode, setInterestMode] = useState(isAutoInterest ? 'compound' : 'simple');

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
        setStakeAmount('');
        setDuration(1);
        setIsStakeModalOpen(false);
    };

    const handleUnstake = () => {
        if (unstakeAmount <= 0 || unstakeAmount > availableToUnstakeDGYM) {
            alert('Invalid unstake amount');
            return;
        }
        onUnstake(unstakeAmount);
        setUnstakeAmount('');
        setIsUnstakeModalOpen(false);
    };

    const calculateUnlockDate = (weeks) => {
        const unlockDate = new Date();
        unlockDate.setDate(unlockDate.getDate() + weeks * 7);
        return unlockDate.toLocaleDateString();
    };

    const calculateExpectedROI = (amount, weeks, autoInterest) => {
        const days = weeks * 7;

        if (autoInterest) {
            const dailyRate = Math.pow(1 + apy, 1 / 365) - 1;
            return (amount * Math.pow(1 + dailyRate, days) - amount).toFixed(2);
        } else {
            return (amount * apr * (days / 365)).toFixed(2);
        }
    };

    const toggleInterestMode = (mode) => {
        setInterestMode(mode);
    };

    return (
        <div className={styles.stakingActions}>
            <div className={styles.cardContainer}>
                <div className={styles.card}>
                    <h3>Available DGYM Amount</h3>
                    <p className={styles.cardValue}>{availableToStakeDGYM} DGYM</p>
                    <button className={styles.cardButton} onClick={() => setIsStakeModalOpen(true)}>Stake</button>
                </div>
                <div className={styles.card}>
                    <h3>Available DGYM Amount</h3>
                    <p className={styles.cardValue}>{availableToUnstakeDGYM} DGYM</p>
                    <button className={styles.cardButton} onClick={() => setIsUnstakeModalOpen(true)}>Unstake</button>
                </div>
            </div>

            <Modal
                isOpen={isStakeModalOpen}
                onRequestClose={() => setIsStakeModalOpen(false)}
                className={styles.modal}
                overlayClassName={styles.overlay}
            >
                <h2>Stake DGYM</h2>
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
                            onChange={(e) => setDuration(e.target.value)}
                            placeholder="Enter weeks..."
                        />
                    </div>
                    <div className={styles.durationButtons}>
                        <button onClick={() => setDuration(1)}>1W</button>
                        <button onClick={() => setDuration(5)}>5W</button>
                        <button onClick={() => setDuration(10)}>10W</button>
                        <button onClick={() => setDuration(25)}>25W</button>
                        <button onClick={() => setDuration(52)}>52W</button>
                    </div>
                </div>
                <div className={styles.interestToggle}>
                    <h3>Compound Mode</h3>
                    <div className={styles.interestToggleButtons}>
                        <button
                            className={`${styles.toggleButton} ${interestMode === 'simple' ? styles.active : ''}`}
                            onClick={() => toggleInterestMode('simple')}
                        >
                            Manual
                        </button>
                        <button
                            className={`${styles.toggleButton} ${interestMode === 'compound' ? styles.active : ''}`}
                            onClick={() => toggleInterestMode('compound')}
                        >
                            Auto
                        </button>
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
            </Modal>

            <Modal
                isOpen={isUnstakeModalOpen}
                onRequestClose={() => setIsUnstakeModalOpen(false)}
                className={styles.modal}
                overlayClassName={styles.overlay}
            >
                <h2>Unstake DGYM</h2>
                <p>Available DGYM for unstake: <b>{availableToUnstakeDGYM}</b></p>
                <AmountInput maxAmount={availableToUnstakeDGYM} onChange={setUnstakeAmount} />
                <button className={styles.actionButton} onClick={handleUnstake}>Unstake</button>
                <button className={styles.modalCloseButton} onClick={() => setIsUnstakeModalOpen(false)}>Close</button>
            </Modal>

            <div className={styles.claimSection}>
                <h2 className={styles.claimTitle}><b>REWARDS</b></h2>
                <div className={styles.claimContainer}>
                    <div className={styles.claimColumn}>
                        <p>USDT</p>
                        <p className={styles.claimValue}>{rewards.USDT}</p>
                        <button className={styles.actionButton} onClick={onClaimUSDT}>Claim USDT</button>
                    </div>
                    <div className={styles.claimColumn}>
                        <p>DGYM</p>
                        <p className={styles.claimValue}>{rewards.DGYM}</p>
                        <button className={styles.actionButton} onClick={onClaimDGYM}>Claim DGYM</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default StakingActions;
