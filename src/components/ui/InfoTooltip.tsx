import React, { useState } from 'react';

interface InfoTooltipProps {
    text: string;
}

const InfoTooltip: React.FC<InfoTooltipProps> = ({ text }) => {
    const [isTooltipVisible, setIsTooltipVisible] = useState<boolean>(false);

    return (
        <div className="relative inline-block">
            <svg
                className="cursor-pointer w-6 h-6 m-1 mt-0 fill-current text-light"
                onMouseEnter={() => setIsTooltipVisible(true)}
                onMouseLeave={() => setIsTooltipVisible(false)}
                onClick={() => setIsTooltipVisible(!isTooltipVisible)}
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                viewBox="0 0 16 16"
            >
                <path d="M8 1a7 7 0 1 1 0 14A7 7 0 0 1 8 1zm0 1a6 6 0 1 0 0 12A6 6 0 0 0 8 2zM8 5a1 1 0 1 1 0 2A1 1 0 0 1 8 5zm0 3a1 1 0 0 1 1 1v3a1 1 0 0 1-2 0V9a1 1 0 0 1 1-1z" />
            </svg>
            {isTooltipVisible && (
                <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 bg-dark text-light p-2 rounded shadow-lg z-10 whitespace-nowrap">
                    {text}
                    <div className="absolute top-full left-1/2 transform -translate-x-1/2 border-4 border-transparent border-t-dark"></div>
                </div>
            )}
        </div>
    );
};

export default InfoTooltip;
