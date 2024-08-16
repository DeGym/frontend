import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes, faCheckCircle, faExclamationCircle, faInfoCircle } from '@fortawesome/free-solid-svg-icons';
import styles from '@/styles/components/ui/Toast.module.css';

export type ToastType = 'success' | 'error' | 'info';

interface ToastProps {
    message: string;
    type: ToastType;
    onClose: () => void;
    duration?: number;
}

const Toast: React.FC<ToastProps> = ({ message, type, onClose, duration = 3000 }) => {
    const [isVisible, setIsVisible] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => {
            setIsVisible(false);
            onClose();
        }, duration);

        return () => clearTimeout(timer);
    }, [duration, onClose]);

    const icon = {
        success: faCheckCircle,
        error: faExclamationCircle,
        info: faInfoCircle,
    }[type];

    if (!isVisible) return null;

    return (
        <div className={`${styles.toast} ${styles[type]}`}>
            <FontAwesomeIcon icon={icon} className={styles.icon} />
            <p className={styles.message}>{message}</p>
            <button onClick={onClose} className={styles.closeButton}>
                <FontAwesomeIcon icon={faTimes} />
            </button>
        </div>
    );
};

export default Toast;