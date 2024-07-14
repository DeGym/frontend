import React, { useState } from 'react';
import styles from '../styles/components/InfoTooltip.module.css';

const InfoTooltip = ({ text }) => {
    const [isTooltipVisible, setIsTooltipVisible] = useState(false);

    return (
        <div className={styles.infoContainer}>
            <svg
                className={styles.infoIcon}
                onMouseEnter={() => setIsTooltipVisible(true)}
                onMouseLeave={() => setIsTooltipVisible(false)}
                onClick={() => setIsTooltipVisible(!isTooltipVisible)}
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                viewBox="0 0 16 16"
            >
                <path d="M8 1a7 7 0 1 1 0 14A7 7 0 0 1 8 1zm0 1a6 6 0 1 0 0 12A6 6 0 0 0 8 2zM8 5a1 1 0 1 1 0 2A1 1 0 0 1 8 5zm0 3a1 1 0 0 1 1 1v3a1 1 0 0 1-2 0V9a1 1 0 0 1 1-1z" />
            </svg>
            {isTooltipVisible && (
                <div className={styles.tooltip}>
                    {text}
                </div>
            )}
        </div>
    );
};

export default InfoTooltip;
