import React from 'react';
import styles from '@/styles/components/ui/Input.module.css';

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
    label?: string;
    error?: string;
}

const Input: React.FC<InputProps> = ({ label, error, className, ...props }) => {
    return (
        <div className={styles.inputWrapper}>
            {label && <label className={styles.label}>{label}</label>}
            <input className={`${styles.input} ${error ? styles.inputError : ''} ${className}`} {...props} />
            {error && <span className={styles.errorMessage}>{error}</span>}
        </div>
    );
};

export default Input;