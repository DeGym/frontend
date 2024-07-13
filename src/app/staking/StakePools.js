import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import styles from '../../styles/components/StakePools.module.css';

const StakePools = ({ pools }) => {
    const [filter, setFilter] = useState('all');
    const [searchTerm, setSearchTerm] = useState('');

    const handleFilterChange = (newFilter) => setFilter(newFilter);
    const handleSearchChange = (e) => setSearchTerm(e.target.value);

    const filteredPools = pools.filter((pool) => {
        const matchesFilter = filter === 'all' || pool.status === filter;
        const matchesSearch = pool.amountStaked.toString().includes(searchTerm);
        return matchesFilter && matchesSearch;
    });

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    };

    return (
        <div className={styles.stakePoolsSection}>
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
                        placeholder="Search Pools"
                        value={searchTerm}
                        onChange={handleSearchChange}
                        className={styles.searchInput}
                    />
                </div>
            </div>
            <div className={styles.stakePoolsContainer}>
                <table className={styles.stakeTable}>
                    <thead>
                        <tr>
                            <th>Amount Staked</th>
                            <th>Reward (USDT)</th>
                            <th>Reward (DGYM)</th>
                            <th>Interest</th>
                            <th>Created Date</th>
                            <th>End Date</th>
                            <th>Status</th>
                        </tr>
                    </thead>
                    <tbody>
                        {filteredPools.map((pool, index) => (
                            <tr key={index} className={styles.tableRow}>
                                <td>{pool.amountStaked} DGYM</td>
                                <td>{pool.rewardUSDT}</td>
                                <td>{pool.rewardDGYM}</td>
                                <td>{pool.interest}</td>
                                <td>{new Date(pool.createdDate).toLocaleDateString()}</td>
                                <td>{new Date(pool.endDate).toLocaleDateString()}</td>
                                <td className={pool.status === 'live' ? styles.statusLive : styles.statusFinished}>
                                    {pool.status}
                                </td>
                            </tr>
                        ))}
                    </tbody>
                    <tfoot>
                        <tr className={styles.tableFooter}>
                            <td colSpan="7">
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

export default StakePools;
