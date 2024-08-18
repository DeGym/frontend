import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSpinner } from '@fortawesome/free-solid-svg-icons';

interface LoadingSpinnerProps {
    size?: 'small' | 'medium' | 'large';
    message?: string;
}

const LoadingSpinner: React.FC<LoadingSpinnerProps> = ({ size = 'medium', message = 'Loading...' }) => {
    const sizeClass = {
        small: 'text-xl',
        medium: 'text-3xl',
        large: 'text-5xl',
    }[size];

    return (
        <div className="flex flex-col items-center justify-center">
            <FontAwesomeIcon icon={faSpinner} spin className={`${sizeClass} text-primary mb-2`} />
            <p className="text-sm text-gray-600">{message}</p>
        </div>
    );
};

export default LoadingSpinner;