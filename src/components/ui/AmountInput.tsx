import React from 'react';
import Input from './Input';
import styles from '@/styles/components/ui/AmountInput.module.css';

interface AmountInputProps {
    value: number;
    onChange: (value: number) => void;
    max: number;
    placeholder?: string;
    label?: string;
}

const AmountInput: React.FC<AmountInputProps> = ({ value, onChange, max, placeholder, label }) => {
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const newValue = parseFloat(e.target.value);
        if (!isNaN(newValue) && newValue >= 0 && newValue <= max) {
            onChange(newValue);
        }
    };

    return (
        <div className={styles.amountInputWrapper}>
            <Input
                type="number"
                value={value}
                onChange={handleChange}
                placeholder={placeholder}
                label={label}
                min={0}
                max={max}
                step="0.01"
            />
            <div className={styles.maxButton} onClick={() => onChange(max)}>
                Max
            </div>
        </div>
    );
};

export default AmountInput;