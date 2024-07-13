import React, { useState } from 'react';
import Modal from 'react-modal';
import styles from '../../styles/components/StakingActions.module.css';
import InfoTooltip from '@/components/InfoToolTip';


const StakingActions = ({
    availableToStakeDGYM,
    availableToUnstakeDGYM,
    onStake,
    onUnstake,
    onClaimUSDT,
    onClaimDGYM,
    isAutoInterest,
    rewards = { DGYM: 0, USDT: 0 }
}) => {
    const [stakeAmount, setStakeAmount] = useState(0);
    const [unstakeAmount, setUnstakeAmount] = useState('');
    const [rangeValue, setRangeValue] = useState(0);
    const [duration, setDuration] = useState(0);
    const [isStakeModalOpen, setIsStakeModalOpen] = useState(false);
    const [isUnstakeModalOpen, setIsUnstakeModalOpen] = useState(false);
    const [interestMode, setInterestMode] = useState(isAutoInterest ? 'compound' : 'simple');

    const handleStake = () => {
        if (stakeAmount <= 0 || stakeAmount > availableToStakeDGYM) {
            alert('Invalid stake amount');
            return;
        }
        if (duration <= 0) {
            alert('Invalid duration');
            return;
        }
        onStake(stakeAmount, duration, interestMode === 'auto');
        setStakeAmount('');
        setDuration(0);
        setRangeValue(0);
        setIsStakeModalOpen(false);
    };

    const handleUnstake = () => {
        if (unstakeAmount <= 0 || unstakeAmount > availableToUnstakeDGYM) {
            alert('Invalid unstake amount');
            return;
        }
        onUnstake(unstakeAmount);
        setUnstakeAmount('');
        setRangeValue(0);
        setIsUnstakeModalOpen(false);
    };

    const handleRangeChange = (value, limit) => {
        setRangeValue(value);
        setStakeAmount((limit * (value / 100)).toFixed(2));
        setUnstakeAmount((limit * (value / 100)).toFixed(2));
    };

    const calculateUnlockDate = (weeks) => {
        const unlockDate = new Date();
        unlockDate.setDate(unlockDate.getDate() + weeks * 7);
        return unlockDate.toLocaleDateString();
    };

    const calculateExpectedROI = (amount, weeks, autoInterest) => {
        const apy = 0.12; // Example APY
        if (autoInterest) {
            const periods = weeks / 52;
            return (amount * Math.pow(1 + apy / 52, periods * 52) - amount).toFixed(2);
        } else {
            return (amount * apy * (weeks / 52)).toFixed(2);
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
                <div className={styles.inputGroup}>
                    <input
                        type="number"
                        value={stakeAmount}
                        min={0}
                        max={availableToStakeDGYM}
                        onChange={(e) => setStakeAmount(e.target.value)}
                        placeholder="Enter amount..."
                        className={styles.input}
                    />
                </div>
                <div className={styles.percentageButtons}>
                    <button onClick={() => handleRangeChange(25, availableToStakeDGYM)}>25%</button>
                    <button onClick={() => handleRangeChange(50, availableToStakeDGYM)}>50%</button>
                    <button onClick={() => handleRangeChange(75, availableToStakeDGYM)}>75%</button>
                    <button onClick={() => handleRangeChange(100, availableToStakeDGYM)}>100%</button>
                </div>
                <input
                    type="range"
                    min="0"
                    max="100"
                    value={rangeValue}
                    onChange={(e) => handleRangeChange(e.target.value, availableToStakeDGYM)}
                    className={styles.rangeSlider}
                />
                <div className={styles.durationSection}>
                    <h3>Duration (in weeks)
                        <InfoTooltip text="Enter the duration for which you want to stake your DGYM." />

                    </h3>
                    <div className={styles.inputGroup}>
                        <input
                            type="number"
                            value={duration}
                            min={0}
                            onChange={(e) => setDuration(e.target.value)}
                            placeholder="Enter weeks..."
                            className={styles.input}
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
                    <h3>Interest</h3>
                    <div className={styles.interestToggleButtons}>
                        <button
                            className={`${styles.toggleButton} ${interestMode === 'simple' ? styles.active : ''}`}
                            onClick={() => toggleInterestMode('simple')}
                        >
                            Simple
                        </button>
                        <button
                            className={`${styles.toggleButton} ${interestMode === 'compound' ? styles.active : ''}`}
                            onClick={() => toggleInterestMode('compound')}
                        >
                            Compound
                        </button>
                    </div>
                </div>
                <div className={styles.lockOverviewCard}>
                    <h3>LOCK <b>OVERVIEW</b></h3>
                    <p><b>DGYM TO BE LOCKED:</b> {stakeAmount} DGYM</p>
                    <p><b>APY:</b> 12%</p>
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
                <div className={styles.inputGroup}>
                    <input
                        type="number"
                        value={unstakeAmount}
                        min={0}
                        max={availableToUnstakeDGYM}
                        onChange={(e) => setUnstakeAmount(e.target.value)}
                        placeholder="Enter amount..."
                        className={styles.input}
                    />
                </div>
                <div className={styles.percentageButtons}>
                    <button onClick={() => handleRangeChange(25, availableToUnstakeDGYM)}>25%</button>
                    <button onClick={() => handleRangeChange(50, availableToUnstakeDGYM)}>50%</button>
                    <button onClick={() => handleRangeChange(75, availableToUnstakeDGYM)}>75%</button>
                    <button onClick={() => handleRangeChange(100, availableToUnstakeDGYM)}>100%</button>
                </div>
                <input
                    type="range"
                    min="0"
                    max="100"
                    value={rangeValue}
                    onChange={(e) => handleRangeChange(e.target.value, availableToUnstakeDGYM)}
                    className={styles.rangeSlider}
                />
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