import React, { useState } from 'react';
import styles from '../../styles/components/StakingActions.module.css';

const StakingActions = ({ availableDGYM, onStake, onUnstake, onClaim, onToggleAutoCompound, isAutoCompound }) => {
    const [stakeAmount, setStakeAmount] = useState('');
    const [unstakeAmount, setUnstakeAmount] = useState('');

    const handleStake = () => {
        onStake(stakeAmount);
        setStakeAmount('');
    };

    const handleUnstake = () => {
        onUnstake(unstakeAmount);
        setUnstakeAmount('');
    };

    return (
        <div className={styles.stakingActions}>
            <h2 className="text-center">Stake DGYM</h2>
            <div className={styles.stakeSection}>
                <p>My available DGYM for stake: {availableDGYM}</p>
                <div className={styles.inputGroup}>
                    <input
                        type="number"
                        value={stakeAmount}
                        onChange={(e) => setStakeAmount(e.target.value)}
                        placeholder="Enter amount..."
                        className={styles.input}
                    />
                    <div className={styles.percentageButtons}>
                        <button onClick={() => setStakeAmount(availableDGYM * 0.25)}>25%</button>
                        <button onClick={() => setStakeAmount(availableDGYM * 0.5)}>50%</button>
                        <button onClick={() => setStakeAmount(availableDGYM * 0.75)}>75%</button>
                        <button onClick={() => setStakeAmount(availableDGYM)}>100%</button>
                    </div>
                </div>
                <button onClick={handleStake}>Stake</button>
            </div>

            <div className={styles.unstakeSection}>
                <h3>Unstake DGYM</h3>
                <div className={styles.inputGroup}>
                    <input
                        type="number"
                        value={unstakeAmount}
                        onChange={(e) => setUnstakeAmount(e.target.value)}
                        placeholder="Enter amount..."
                        className={styles.input}
                    />
                </div>
                <button onClick={handleUnstake}>Unstake</button>
            </div>

            <div className={styles.claimSection}>
                <h3>Claim Rewards</h3>
                <button onClick={onClaim}>Claim</button>
            </div>

            <div className={styles.autoCompoundSection}>
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
        </div>
    );
};

export default StakingActions;
