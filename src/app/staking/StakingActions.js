import React, { useState } from 'react';
import styles from '../../styles/components/StakingActions.module.css';

const StakingActions = ({
    availableDGYM,
    onStake,
    onUnstake,
    onClaimUSDT,
    onClaimDGYM,
    onToggleAutoCompound,
    isAutoCompound,
    rewards = { DGYM: 0, USDT: 0 }
}) => {
    const [stakeAmount, setStakeAmount] = useState('');
    const [unstakeAmount, setUnstakeAmount] = useState('');
    const [rangeValue, setRangeValue] = useState(0);

    const handleStake = () => {
        if (stakeAmount <= 0 || stakeAmount > availableDGYM) {
            alert('Invalid stake amount');
            return;
        }
        onStake(stakeAmount);
        setStakeAmount('');
        setRangeValue(0);
    };

    const handleUnstake = () => {
        if (unstakeAmount <= 0) {
            alert('Invalid unstake amount');
            return;
        }
        onUnstake(unstakeAmount);
        setUnstakeAmount('');
    };

    const handleRangeChange = (value) => {
        setRangeValue(value);
        setStakeAmount((availableDGYM * (value / 100)).toFixed(2));
    };

    return (
        <div className={styles.stakingActions}>
            <div className={styles.section}>
                <h3>Auto-Compound</h3>
                <label className={styles.toggleSwitch}>
                    <input
                        type="checkbox"
                        checked={isAutoCompound}
                        onChange={onToggleAutoCompound}
                    />
                    <span className={styles.slider}></span>
                </label>
                <p>{isAutoCompound ? 'Auto-compound is enabled' : 'Auto-compound is disabled'}</p>
            </div>
            <div className={styles.stakeUnstakeContainer}>
                <div className={styles.section}>
                    <h2>Stake</h2>
                    <p>Available DGYM for stake: <b>{availableDGYM}</b></p>
                    <div className={styles.inputGroup}>
                        <input
                            type="number"
                            value={stakeAmount}
                            min={0}
                            max={availableDGYM}
                            onChange={(e) => setStakeAmount(e.target.value)}
                            placeholder="Enter amount..."
                            className={styles.input}
                        />
                    </div>
                    <div className={styles.percentageButtons}>
                        <button onClick={() => handleRangeChange(25)}>25%</button>
                        <button onClick={() => handleRangeChange(50)}>50%</button>
                        <button onClick={() => handleRangeChange(75)}>75%</button>
                        <button onClick={() => handleRangeChange(100)}>100%</button>
                    </div>
                    <input
                        type="range"
                        min="0"
                        max="100"
                        value={rangeValue}
                        onChange={(e) => handleRangeChange(e.target.value)}
                        className={styles.rangeSlider}
                    />
                    <button className={styles.actionButton} onClick={handleStake}>Stake</button>
                </div>

                <div className={styles.section}>
                    <h2>Unstake</h2>
                    <p>Available DGYM for unstake: <b>{availableDGYM}</b></p>
                    <div className={styles.inputGroup}>
                        <input
                            type="number"
                            value={unstakeAmount}
                            onChange={(e) => setUnstakeAmount(e.target.value)}
                            placeholder="Enter amount..."
                            className={styles.input}
                        />
                    </div>
                    <div className={styles.percentageButtons}>
                        <button onClick={() => handleRangeChange(25)}>25%</button>
                        <button onClick={() => handleRangeChange(50)}>50%</button>
                        <button onClick={() => handleRangeChange(75)}>75%</button>
                        <button onClick={() => handleRangeChange(100)}>100%</button>
                    </div>
                    <input
                        type="range"
                        min="0"
                        max="100"
                        value={rangeValue}
                        onChange={(e) => handleRangeChange(e.target.value)}
                        className={styles.rangeSlider}
                    />
                    <button className={styles.actionButton} onClick={handleUnstake}>Unstake</button>
                </div>
            </div>

            <div className={styles.claimSection}>
                <h2 className={styles.claimTitle}><b>REWARDS</b></h2>
                <div className={styles.claimContainer}>
                    <div className={styles.claimColumn}>
                        <p>USDT</p>
                        <p className={styles.claimValue}>{rewards.USDT}</p>
                        <button className={styles.actionButton} onClick={onClaimUSDT}>Claim</button>
                    </div>
                    <div className={styles.claimColumn}>
                        <p>DGYM</p>
                        <p className={styles.claimValue}>{rewards.DGYM}</p>
                        <button className={styles.actionButton} onClick={onClaimDGYM}>Claim</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default StakingActions;
