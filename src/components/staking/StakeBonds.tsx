import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faFilter } from '@fortawesome/free-solid-svg-icons';
import styles from '@/styles/components/staking/StakeBonds.module.css';

interface Bond {
    amountStaked: number;
    rewards: number;
    interest: string;
    createdDate: string;
    endDate: string;
    status: string;
}

interface StakeBondsProps {
    bonds: Bond[];
}

const StakeBonds: React.FC<StakeBondsProps> = ({ bonds }) => {
    const [searchTerm, setSearchTerm] = useState('');
    const [filter, setFilter] = useState('all');

    const filteredBonds = bonds.filter((bond) => {
        const matchesSearch = bond.amountStaked.toString().includes(searchTerm) ||
            bond.rewards.toString().includes(searchTerm) ||
            bond.interest.toLowerCase().includes(searchTerm.toLowerCase()) ||
            bond.status.toLowerCase().includes(searchTerm.toLowerCase());

        const matchesFilter = filter === 'all' || bond.status.toLowerCase() === filter;

        return matchesSearch && matchesFilter;
    });

    return (
        <div className={styles.stakeBondsSection}>
            <h2 className={styles.sectionTitle}>Your Staking Bonds</h2>
            <div className={styles.filterContainer}>
                <div className={styles.searchContainer}>
                    <FontAwesomeIcon icon={faSearch} className={styles.searchIcon} />
                    <input
                        type="text"
                        placeholder="Search bonds..."
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                        className={styles.searchInput}
                    />
                </div>
                <div className={styles.filterButtons}>
                    <button
                        className={`${styles.filterButton} ${filter === 'all' ? styles.active : ''}`}
                        onClick={() => setFilter('all')}
                    >
                        All
                    </button>
                    <button
                        className={`${styles.filterButton} ${filter === 'live' ? styles.active : ''}`}
                        onClick={() => setFilter('live')}
                    >
                        Live
                    </button>
                    <button
                        className={`${styles.filterButton} ${filter === 'finished' ? styles.active : ''}`}
                        onClick={() => setFilter('finished')}
                    >
                        Finished
                    </button>
                </div>
            </div>
            <div className={styles.bondsContainer}>
                {filteredBonds.map((bond, index) => (
                    <div key={index} className={styles.bondCard}>
                        <div className={styles.bondInfo}>
                            <h3 className={styles.bondTitle}>Bond #{index + 1}</h3>
                            <p>Amount Staked: {bond.amountStaked} DGYM</p>
                            <p>Rewards: {bond.rewards} DGYM</p>
                            <p>Interest: {bond.interest}</p>
                            <p>Created: {bond.createdDate}</p>
                            <p>Ends: {bond.endDate}</p>
                            <p>Status: <span className={styles[bond.status.toLowerCase()]}>{bond.status}</span></p>
                        </div>
                        {bond.status === 'live' && (
                            <button className={styles.claimButton}>Claim Rewards</button>
                        )}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default StakeBonds;