import React from 'react';
import styles from '../../styles/components/tokenStats.module.css';

const TokenStats = () => {
    const stats = [
        { title: 'Price', value: '$0.005145' },
        { title: 'Market Cap', value: '$21,344,707' },
        { title: 'Circulation', value: '4,148,929,542' },
        { title: 'Staked', value: '2,127,582,473' },
        { title: 'Supply', value: '10,527,868,709' },
    ];

    return (
        <div className={`${styles.container} ${styles.heroStandard}`}>
            <div className="row align-items-center row-cols-1 mb-5">
                <div className="col">
                    <h1 className={`${styles.title}`}>$DGYM <b>Stats</b></h1>
                    <p className={`lead ${styles.subTitle}`}>DGYM is the native utility token of the DeGym platform. It is designed to facilitate seamless access to gym memberships, provide rewards to stakers, and enable transactions within the DeGym ecosystem.</p>
                </div>
            </div>
            <div className="row align-items-center">
                {stats.map((stat, index) => (
                    <div key={index} className="col-12 col-sm-12 col-md-6 col-lg-6 offset-lg-3 offset-md-3">
                        <div className={`${styles.Card} p-2`}>
                            <div className="card-body text-start">
                                <div className="row row-cols-2 mb-4">
                                    <div className="col-9 text-start">
                                        <span className={styles.cardLabel}>{stat.title}</span>
                                    </div>
                                </div>
                                <h1 className={`${styles.cardValue}`}>
                                    {stat.value}
                                </h1>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
            <div className="row align-items-center row-cols-1 mb-5 mt-3">
                <div className="col">
                    <div className="d-grid gap-3 col-8 mx-auto d-md-block">
                        <a href="/wallet" className={`btn ${styles.btnPrimary} mx-2`} target="_blank">Wallet Guide</a>
                        <a href="/dgym_markets" className={`btn ${styles.btnSecondary} px-4 py-2 me-md-2`} target="_blank">DGYM Markets</a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TokenStats;
