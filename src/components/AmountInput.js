import React, { useState } from 'react';

const AmountInput = ({ maxAmount, onChange, isDisabled = false }) => {
    const [amount, setAmount] = useState(0);
    const [rangeValue, setRangeValue] = useState(0);

    const handleInputChange = (e) => {
        const value = e.target.value;
        setAmount(value);
        setRangeValue((value / maxAmount) * 100);
        onChange(value); // pass value directly
    };

    const handleRangeChange = (value) => {
        setRangeValue(value);
        const calculatedAmount = (maxAmount * (value / 100)).toFixed(2);
        setAmount(calculatedAmount);
        onChange(calculatedAmount); // pass calculated amount directly
    };

    const handlePercentageButtonClick = (percentage) => {
        const value = (maxAmount * (percentage / 100)).toFixed(2);
        setAmount(value);
        setRangeValue(percentage);
        onChange(value); // pass value directly
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
                onChange={(e) => handleRangeChange(e.target.value)}
                className="w-full mb-4"
                disabled={isDisabled}
            />
        </div>
    );
};

export default AmountInput;
