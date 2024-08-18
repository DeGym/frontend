import React from 'react';
import Link from 'next/link';

interface CardProps {
    title: string;
    value: string | number;
    unit?: string;
    href?: string;
}

const Card: React.FC<CardProps> = ({ title, value, href, ...props }) => {
    if (href) {
        return (
            <Link href={href} {...props}>
                <div className="bg-accent p-5 rounded-lg shadow-md text-center flex-1 mx-2">
                    <h2 className="text-3xl text-left font-bold mt-2 text-primary">{value}</h2>
                    <p className="text-sm text-left first-line:mb-2">{title}</p>
                </div>
            </Link>
        );
    }

    return (
        <div className="bg-accent p-5 rounded-lg shadow-md text-center flex-1 mx-2">
            <h2 className="text-3xl text-left font-bold mt-2 text-primary">{value}</h2>
            <p className="text-sm text-left first-line:mb-2">{title}</p>
        </div>
    );
};

export default Card;