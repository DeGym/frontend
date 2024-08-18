import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSpinner } from '@fortawesome/free-solid-svg-icons';
import styles from '@/styles/components/ui/LoadingOverlay.module.css';

interface LoadingOverlayProps {
    message?: string;
}

const LoadingOverlay: React.FC<LoadingOverlayProps> = ({ message = 'Processing transaction...' }) => {
    return (
        <div className={styles.overlay}>
            <div className={styles.content}>
                <FontAwesomeIcon icon={faSpinner} spin className={styles.spinner} />
                <p className={styles.message}>{message}</p>
            </div>
        </div>
    );
};

export default LoadingOverlay;