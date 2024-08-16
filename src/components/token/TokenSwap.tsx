import React from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import Card from '@/components/ui/Card';
import Form from '@/components/ui/Form';
import LoadingOverlay from '@/components/ui/LoadingOverlay';
import { useTokenContract } from '@/hooks/useTokenContract';
import { useWeb3 } from '@/hooks/useWeb3';
import { useToast } from '@/context/ToastContext';
import styles from '@/styles/components/token/TokenSwap.module.css';

interface SwapFormValues {
    amount: string;
    toAddress: string;
}

const TokenSwap: React.FC = () => {
    const { account } = useWeb3();
    const { transfer } = useTokenContract();
    const { showToast } = useToast();

    const onSubmit: SubmitHandler<SwapFormValues> = async (data) => {
        if (!account) {
            showToast('Please connect your wallet', 'error');
            return;
        }

        try {
            await transfer(data.toAddress, data.amount, account);
            showToast('Tokens swapped successfully', 'success');
        } catch (error) {
            console.error('Swap error:', error);
            showToast('Failed to swap tokens', 'error');
        }
    };

    const fields = [
        {
            name: 'amount',
            label: 'Amount to swap',
            type: 'number',
            placeholder: 'Enter amount',
            rules: {
                required: 'Amount is required',
                min: { value: 0, message: 'Amount must be positive' },
            },
        },
        {
            name: 'toAddress',
            label: 'Recipient address',
            type: 'text',
            placeholder: 'Enter recipient address',
            rules: {
                required: 'Recipient address is required',
                pattern: {
                    value: /^0x[a-fA-F0-9]{40}$/,
                    message: 'Invalid Ethereum address',
                },
            },
        },
    ];

    return (
        <Card className={styles.tokenSwap}>
            <h3 className={styles.swapTitle}>Swap DGYM Tokens</h3>
            <Form
                fields={fields}
                onSubmit={onSubmit}
                submitText="Swap"
            />
            <LoadingOverlay />
        </Card>
    );
};

export default TokenSwap;