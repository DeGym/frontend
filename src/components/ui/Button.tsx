import React from 'react';
import styles from '@/styles/components/ui/Button.module.css';
import Link from 'next/link';
import { AnchorHTMLAttributes, ButtonHTMLAttributes } from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: 'primary' | 'secondary' | 'outline';
    size?: 'small' | 'medium' | 'large';
    href?: string;
}

const Button: React.FC<ButtonProps> = ({
    children,
    variant = 'primary',
    size = 'medium',
    className,
    href,
    ...props
}) => {
    const buttonProps = props as ButtonHTMLAttributes<HTMLButtonElement>;
    const linkProps = props as AnchorHTMLAttributes<HTMLAnchorElement>;

    if (href) {
        return (
            <Link href={href} className={`${styles.button} ${styles[variant]} ${styles[size]} ${className}`} {...linkProps}>
                {children}
            </Link>
        );
    }

    return (
        <button
            className={`${styles.button} ${styles[variant]} ${styles[size]} ${className}`}
            {...buttonProps}
        >
            {children}
        </button>
    );
};

export default Button;