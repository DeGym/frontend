import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClock, faCalendarAlt, faLock, faShieldAlt, faWallet, faPiggyBank, faChartLine } from '@fortawesome/free-solid-svg-icons';
import styles from './styles/VestingSection.module.css';
import Differentials from '@/components/section/Differentials';

const VestingSection = () => {
    const benefits = [
        {
            title: 'Long-term Commitment',
            icon: faPiggyBank,
            description: 'Encourages team members to stay engaged and contribute over the long term.',
        },
        {
            title: 'Investors Confidence',
            icon: faChartLine,
            description: 'Demonstrates a commitment to project sustainability, boosting investor confidence.',
        },
        {
            title: 'Reduced Market Volatility',
            icon: faShieldAlt,
            description: 'Prevents large token dumps, thereby reducing market volatility.',
        },
    ];

    return (
        <div className={styles.vestingSection}>
            <h2><b>Vesting</b></h2>
            <p className={styles.intro}>
                Vesting is a process by which tokens are gradually released over a specified period. This ensures long-term commitment from team members and aligns the interests of all stakeholders. By implementing vesting, we aim to foster a stable and sustainable growth environment for our project.
            </p>

            <div className={styles.cardsContainer}>
                <div className={styles.card}>
                    <div className={styles.cardHeader}>
                        <FontAwesomeIcon icon={faCalendarAlt} className={styles.cardIcon} />
                        <h2>Schedule</h2>
                    </div>
                    <p>
                        Our vesting schedule is designed to incentivize long-term commitment and steady growth.
                    </p>
                    <ul>
                        <li><FontAwesomeIcon icon={faClock} className={styles.listIcon} /> <b>Total Vesting Period:</b> 18 months</li>
                        <li><FontAwesomeIcon icon={faCalendarAlt} className={styles.listIcon} /> <b>Cliff Period:</b> 2 months</li>
                        <li><FontAwesomeIcon icon={faCalendarAlt} className={styles.listIcon} /> <b>Vesting Frequency:</b> Monthly</li>
                    </ul>
                    <p>
                        During the cliff period, no tokens will be released. After the cliff, tokens will be released monthly over the remaining period.
                    </p>
                </div>

                <div className={styles.card}>
                    <div className={styles.cardHeader}>
                        <FontAwesomeIcon icon={faWallet} className={styles.cardIcon} />
                        <h2>Vesting Wallets</h2>
                    </div>
                    <p>
                        We utilize secure and transparent vesting wallets to manage the vesting process.
                    </p>
                    <p>
                        Each participant’s tokens are held in a dedicated vesting wallet, which automatically releases the tokens according to the vesting schedule.
                    </p>
                    <p>
                        This ensures transparency and security throughout the vesting period.
                    </p>
                </div>
            </div>
            <Differentials title="Vesting Benefits" differentials={benefits} />
            <h2>How It Works</h2>
            <ol className={styles.howItWorks}>
                <li><FontAwesomeIcon icon={faPiggyBank} className={styles.listIcon} /> <b>Allocation:</b> Tokens are allocated to team members, advisors, and other stakeholders.</li>
                <li><FontAwesomeIcon icon={faWallet} className={styles.listIcon} /> <b>Vesting Wallets:</b> Each participant receives a vesting wallet where their allocated tokens are held.</li>
                <li><FontAwesomeIcon icon={faLock} className={styles.listIcon} /> <b>Cliff Period:</b> During the cliff period, tokens remain locked.</li>
                <li><FontAwesomeIcon icon={faCalendarAlt} className={styles.listIcon} /> <b>Monthly Release:</b> After the cliff period, a portion of the tokens is released monthly.</li>
                <li><FontAwesomeIcon icon={faShieldAlt} className={styles.listIcon} /> <b>Full Vesting:</b> At the end of the vesting period, all allocated tokens are fully released.</li>
            </ol>
        </div>
    );
};

export default VestingSection;
