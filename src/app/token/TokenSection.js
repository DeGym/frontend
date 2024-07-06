import React from 'react';
import Image from 'next/image';
import styles from '../../styles/components/Token.module.css';

const TokenSection = () => {
    return (
        <section className={styles.section}>
            <div className={styles.col1}>
                <div className={styles.sectionTitle}>Token</div>
                <div className={styles.sectionCoin}>
                    <img src="/img/token/logo_token.png" alt="Token image" className={styles.coinImage} />
                </div>
            </div>
            <div className={styles.col2}>
                <div className={styles.tokenDescription}>
                    A deflationary utility token ($DGYM)<br />
                    that participates in <span className={styles.textPrimary}>building<br /> a democratic DAO infrastructure</span>
                </div>
                <div className={styles.sectionCoinMobile}>
                    <img src="/img/token/logo_token.png" alt="Token image" className={styles.coinImageMd} />
                </div>
                <div className={styles.tokenSupply}>
                    <div className={styles.sectionTitleWhite}>Max supply</div>
                    <div className={styles.numInner} id="num-counter" data-count="1000000000">1,000,000,000</div>
                    <div className={styles.sectionTitleWhite}>$DGYM</div>
                </div>
            </div>
        </section>
    );
};

export default TokenSection;
