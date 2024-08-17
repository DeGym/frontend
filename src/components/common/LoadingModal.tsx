import React from 'react';
import BaseModal from './BaseModal';
import styles from '@/styles/components/common/LoadingModal.module.css';

interface LoadingModalProps {
    isOpen: boolean;
    message: string;
}

const LoadingModal: React.FC<LoadingModalProps> = ({ isOpen, message }) => {
    return (
        <BaseModal isOpen={isOpen} onClose={() => { }} title="Loading">
            <div className={styles.loadingModalContent}>
                <div className={styles.spinner}></div>
                <p className={styles.loadingMessage}>{message}</p>
            </div>
        </BaseModal>
    );
};

export default LoadingModal;