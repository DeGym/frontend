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
    const handleFilterChange = (newFilter) => setFilter(newFilter);
    const handleSearchChange = (e) => setSearchTerm(e.target.value);

    const filteredBonds = bonds.filter((bond) => {
        const matchesFilter = filter === 'all' || bond.status === filter;
        const matchesSearch = bond.amountStaked.toString().includes(searchTerm);
        return matchesFilter && matchesSearch;
    });

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    };

    return (
        <div className={styles.stakeBondsSection}>
            <div className={styles.filterContainer}>
                <div className={styles.filterButtons}>
                    <button
                        className={`${styles.filterButton} ${filter === 'all' ? styles.active : ''}`}
                        onClick={() => handleFilterChange('all')}
                    >
                        All
                    </button>
                    <button
                        className={`${styles.filterButton} ${filter === 'live' ? styles.active : ''}`}
                        onClick={() => handleFilterChange('live')}
                    >
                        Live
                    </button>
                    <button
                        className={`${styles.filterButton} ${filter === 'finished' ? styles.active : ''}`}
                        onClick={() => handleFilterChange('finished')}
                    >
                        Finished
                    </button>
                </div>
                <div className={styles.searchContainer}>
                    <FontAwesomeIcon icon={faSearch} className={styles.searchIcon} />
                    <input
                        type="text"
                        placeholder="Search Bonds"
                        value={searchTerm}
                        onChange={handleSearchChange}
                        className={styles.searchInput}
                    />
                </div>
            </div>
            <div className={styles.stakeBondsContainer}>
                <table className={styles.stakeTable}>
                    <thead>
                        <tr>
                            <th>Amount Staked</th>
                            <th>Rewards</th>
                            <th>Interest</th>
                            <th>Created Date</th>
                            <th>End Date</th>
                            <th>Status</th>
                        </tr>
                    </thead>
                    <tbody>
                        {filteredBonds.map((bond, index) => (
                            <tr key={index} className={styles.tableRow}>
                                <td>{bond.amountStaked} DGYM</td>
                                <td>{bond.rewards}</td>
                                <td>{bond.interest}</td>
                                <td>{new Date(bond.createdDate).toLocaleDateString()}</td>
                                <td>{new Date(bond.endDate).toLocaleDateString()}</td>
                                <td className={bond.status === 'live' ? styles.statusLive : styles.statusFinished}>
                                    {bond.status}
                                </td>
                            </tr>
                        ))}
                    </tbody>
                    <tfoot>
                        <tr className={styles.tableFooter}>
                            <td colSpan={6}>
                                <button className={styles.toTopButton} onClick={scrollToTop}>
                                    To Top ^
                                </button>
                            </td>
                        </tr>
                    </tfoot>
                </table>
            </div>
        </div>
    );
};

export default StakeBonds;