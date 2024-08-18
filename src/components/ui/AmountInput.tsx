import React, { useState } from 'react';

interface AmountInputProps {
    maxAmount: number;
    onChange: (value: number) => void;
    isDisabled?: boolean;
}

const AmountInput: React.FC<AmountInputProps> = ({ maxAmount, onChange, isDisabled = false }) => {
    const [amount, setAmount] = useState<number>(0);
    const [rangeValue, setRangeValue] = useState<number>(0);

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = parseFloat(e.target.value);
        setAmount(value);
        setRangeValue((value / maxAmount) * 100);
        onChange(value);
    };

    const handleRangeChange = (value: number) => {
        setRangeValue(value);
        const calculatedAmount = parseFloat((maxAmount * (value / 100)).toFixed(2));
        setAmount(calculatedAmount);
        onChange(calculatedAmount);
    };

    const handlePercentageButtonClick = (percentage: number) => {
        const value = parseFloat((maxAmount * (percentage / 100)).toFixed(2));
        setAmount(value);
        setRangeValue(percentage);
        onChange(value);
    };

    return (
        <div className="flex flex-col items-center mb-4">
            <input
                type="number"
                value={amount}
                min={0}
                max={maxAmount}
                step={0.0001}
                onChange={handleInputChange}
                placeholder="Enter amount..."
                className="border border-gray-300 rounded p-2 mb-2 w-full"
                disabled={isDisabled}
            />
            <div className="flex justify-between mb-2 w-full">
                <button
                    onClick={() => handlePercentageButtonClick(25)}
                    disabled={isDisabled}
                    className="py-1 px-2 rounded">
                    25%
                </button>
                <button
                    onClick={() => handlePercentageButtonClick(50)}
                    disabled={isDisabled}
                    className="py-1 px-2 rounded">
                    50%
                </button>
                <button
                    onClick={() => handlePercentageButtonClick(75)}
                    disabled={isDisabled}
                    className="py-1 px-2 rounded">
                    75%
                </button>
                <button
                    onClick={() => handlePercentageButtonClick(100)}
                    disabled={isDisabled}
                    className="py-1 px-2 rounded">
                    100%
                </button>
            </div>
            <input
                type="range"
                min="0"
                max="100"
                value={rangeValue}
                onChange={(e) => handleRangeChange(parseFloat(e.target.value))}
                className="w-full mb-4"
                disabled={isDisabled}
            />
        </div>
    );
};

export default AmountInput;
