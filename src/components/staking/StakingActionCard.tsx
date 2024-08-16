import React, { useState } from 'react';
import { SubmitHandler } from 'react-hook-form';
import Card from '@/components/ui/Card';
import Form from '@/components/ui/Form';
import Modal from '@/components/ui/Modal';
import Button from '@/components/ui/Button';
import { useToast } from '@/context/ToastContext';
import styles from '@/styles/components/staking/StakingActionCard.module.css';

interface StakingActionCardProps {
    title: string;
    description: string;
    actionLabel: string;
    maxAmount: number;
    onAction: (amount: number) => Promise<void>;
}

interface FormValues {
    amount: string;
}

const StakingActionCard: React.FC<StakingActionCardProps> = ({
    title,
    description,
    actionLabel,
    maxAmount,
    onAction,
}) => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [amount, setAmount] = useState(0);
    const { showToast } = useToast();

    const handleSubmit: SubmitHandler<FormValues> = (data) => {
        const parsedAmount = parseFloat(data.amount);
        setAmount(parsedAmount);
        setIsModalOpen(true);
    };

    const handleConfirm = async () => {
        try {
            await onAction(amount);
            showToast(`${actionLabel} successful`, 'success');
        } catch (error) {
            console.error(`${actionLabel} error:`, error);
            showToast(`Failed to ${actionLabel.toLowerCase()}`, 'error');
        } finally {
            setIsModalOpen(false);
        }
    };

    const fields = [
        {
            name: 'amount',
            label: `Amount to ${actionLabel.toLowerCase()}`,
            type: 'number',
            placeholder: 'Enter amount',
            rules: {
                required: 'Amount is required',
                min: { value: 0, message: 'Amount must be positive' },
                max: { value: maxAmount, message: `Amount cannot exceed ${maxAmount}` },
            },
        },
    ];

    return (
        <Card className={styles.stakingAction}>
            <h3 className={styles.stakingActionTitle}>{title}</h3>
            <p className={styles.stakingActionDescription}>{description}</p>
            <Form
                fields={fields}
                onSubmit={handleSubmit}
                submitText={actionLabel}
            />
            <Modal
                isOpen={isModalOpen}
                onClose={() => setIsModalOpen(false)}
                title={`Confirm ${actionLabel}`}
            >
                <p>Are you sure you want to {actionLabel.toLowerCase()} {amount} DGYM?</p>
                <Button onClick={handleConfirm} variant="primary">Confirm</Button>
            </Modal>
        </Card>
    );
};

export default StakingActionCard;