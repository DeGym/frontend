import React from 'react';
import { useForm, UseFormReturn, FieldValues, SubmitHandler } from 'react-hook-form';
import Input from './Input';
import Button from './Button';
import LoadingOverlay from './LoadingOverlay';
import styles from '@/styles/components/ui/Form.module.css';

interface FormField {
    name: string;
    label: string;
    type: string;
    placeholder?: string;
    rules?: object;
}

interface FormProps<TFieldValues extends FieldValues> {
    fields: FormField[];
    onSubmit: SubmitHandler<TFieldValues>;
    submitText: string;
}

const Form = <TFieldValues extends FieldValues>({ fields, onSubmit, submitText }: FormProps<TFieldValues>) => {
    const { register, handleSubmit, formState: { errors, isSubmitting } } = useForm<TFieldValues>();

    return (
        <form onSubmit={handleSubmit(onSubmit)} className={styles.form}>
            {fields.map((field) => (
                <div key={field.name} className={styles.formField}>
                    <Input
                        label={field.label}
                        type={field.type}
                        placeholder={field.placeholder}
                        error={errors[field.name as keyof TFieldValues]?.message as string}
                        {...register(field.name as keyof TFieldValues, field.rules)}
                    />
                </div>
            ))}
            <Button type="submit" variant="primary" disabled={isSubmitting}>
                {isSubmitting ? 'Processing...' : submitText}
            </Button>
            {isSubmitting && <LoadingOverlay />}
        </form>
    );
};

export default Form;