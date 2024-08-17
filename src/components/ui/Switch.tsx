import React from 'react';

interface SwitchProps {
    leftLabel: string;
    rightLabel: string;
    isChecked: boolean;
    onChange: () => void;
}

const Switch: React.FC<SwitchProps> = ({ leftLabel, rightLabel, isChecked, onChange }) => {
    return (
        <div
            className="flex items-center justify-center bg-transparent rounded-full cursor-pointer border-2 border-primary"
            onClick={onChange}
            style={{ width: '200px', height: '40px' }}
        >
            <div className="relative w-full h-full flex items-center">
                <div
                    className={`absolute w-1/2 h-full bg-primary rounded-full transition-transform duration-300 ease-in-out ${isChecked ? 'translate-x-full' : ''
                        }`}
                ></div>
                <div className="flex justify-between items-center w-full z-10">
                    <span className={`w-1/2 text-center text-sm font-medium ${!isChecked ? 'text-dark' : 'text-light'}`}>
                        {leftLabel}
                    </span>
                    <span className={`w-1/2 text-center text-sm font-medium ${isChecked ? 'text-dark' : 'text-light'}`}>
                        {rightLabel}
                    </span>
                </div>
            </div>
        </div>
    );
};

export default Switch;