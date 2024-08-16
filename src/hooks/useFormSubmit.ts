import { useState } from 'react';
import { useToast } from '@/context/ToastContext';

type SubmitFunction<T> = (data: T) => Promise<void>;

export const useFormSubmit = <T>(submitFn: SubmitFunction<T>) => {
    const [isSubmitting, setIsSubmitting] = useState(false);
    const { showToast } = useToast();

    const handleSubmit = async (data: T) => {
        setIsSubmitting(true);
        try {
            await submitFn(data);
            showToast('Operation successful', 'success');
        } catch (error) {
            console.error('Form submission error:', error);
            showToast('Operation failed', 'error');
        } finally {
            setIsSubmitting(false);
        }
    };

    return { handleSubmit, isSubmitting };
};