import React, { useState } from 'react';
import styles from '../../styles/components/FilterModal.module.css';

const FilterModal = ({ isOpen, onClose, title, options, selectedOptions, onChange, type, min, max, value }) => {
    if (!isOpen) return null;

    const [searchTerm, setSearchTerm] = useState('');

    const filteredOptions = options.filter(option => 
        option.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50" onClick={onClose}>
            <div className="bg-[var(--color-dark)] p-5 rounded-lg w-80 max-w-90% z-51 shadow-lg" onClick={(e) => e.stopPropagation()}>
                <div className="flex justify-between items-center mb-4">
                    <h2 className="text-xl font-semibold">{title}</h2>
                    <button onClick={onClose} className="text-xl text-[var(--color-light)] hover:text-[var(--color-primary)] w-8 h-8 flex items-center justify-center">&times;</button>
                </div>
                {type !== 'range' && (
                    <input
                        type="text"
                        placeholder={`Buscar por ${title.toLowerCase()}`}
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                        className="w-full p-2 mb-4 border border-[var(--color-accent)] rounded-md bg-[var(--color-dark)] text-[var(--color-light)]"
                    />
                )}
                <div>
                    {type === 'range' ? (
                        <div className="flex flex-col items-center mb-4">
                            <input
                                type="range"
                                min={min}
                                max={max}
                                value={value}
                                onChange={(e) => onChange(Number(e.target.value))}
                                className="w-full mb-2"
                            />
                            <span>até {value} km</span>
                        </div>
                    ) : (
                        <div className="flex flex-wrap gap-2 mb-4">
                            {filteredOptions.map((option) => (
                                <button
                                    key={option}
                                    className={`px-3 py-1 rounded-full text-sm ${
                                        selectedOptions.includes(option) 
                                            ? 'bg-[var(--color-primary)] text-[var(--color-dark)] hover:bg-[var(--color-secondary)]' 
                                            : 'bg-[var(--color-accent)] text-[var(--color-light)] hover:bg-[var(--color-primary)] hover:text-[var(--color-dark)]'
                                    }`}
                                    onClick={() => {
                                        const newSelection = selectedOptions.includes(option)
                                            ? selectedOptions.filter((item) => item !== option)
                                            : [...selectedOptions, option];
                                        onChange(newSelection);
                                    }}
                                >
                                    {option}
                                </button>
                            ))}
                        </div>
                    )}
                </div>
                <div className="flex justify-between">
                    <button onClick={() => onChange([])} className="px-4 py-2 bg-[var(--color-accent)] text-[var(--color-light)] border border-[var(--color-accent)] rounded-md hover:bg-[var(--color-primary)] hover:text-[var(--color-dark)]">Limpar</button>
                    <button onClick={onClose} className="px-4 py-2 bg-[var(--color-primary)] text-[var(--color-dark)] rounded-md hover:bg-hoverButton">Aplicar</button>
                </div>
            </div>
        </div>
    );
};

export default FilterModal;