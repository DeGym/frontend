import React from 'react';
import styles from '../styles/components/Card.module.css';

const Card = ({ title, value }) => {
    return (
        <div className={styles.card}>
            <h3>{title}</h3>
            <p>{value}</p>
        </div>
    );
};

export default Card;
