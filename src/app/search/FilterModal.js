import React, { useState } from 'react';
import styles from '../../styles/components/FilterModal.module.css';

const FilterModal = ({ isOpen, onClose, title, options, selectedOptions, onChange, type, min, max, value }) => {
    if (!isOpen) return null;

    const [searchTerm, setSearchTerm] = useState('');

    const filteredOptions = options.filter(option => 
        option.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <div className={styles.modalOverlay} onClick={onClose}>
            <div className={styles.modalContent} onClick={(e) => e.stopPropagation()}>
                <div className={styles.modalHeader}>
                    <h2>{title}</h2>
                    <button onClick={onClose} className={styles.closeButton}>×</button>
                </div>
                {type !== 'range' && (
                    <input
                        type="text"
                        placeholder={`Buscar por ${title.toLowerCase()}`}
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                        className={styles.searchInput}
                    />
                )}
                <div className={styles.modalBody}>
                    {type === 'range' ? (
                        <div className={styles.rangeContainer}>
                            <input
                                type="range"
                                min={min}
                                max={max}
                                value={value}
                                onChange={(e) => onChange(Number(e.target.value))}
                                className={styles.rangeInput}
                            />
                            <span className={styles.rangeValue}>até {value} km</span>
                        </div>
                    ) : (
                        <div className={styles.optionsContainer}>
                            {filteredOptions.map((option) => (
                                <button
                                    key={option}
                                    className={`${styles.optionButton} ${selectedOptions.includes(option) ? styles.selected : ''}`}
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
                <div className={styles.modalFooter}>
                    <button onClick={() => onChange([])} className={styles.clearButton}>Limpar</button>
                    <button onClick={onClose} className={styles.applyButton}>Aplicar</button>
                </div>
            </div>
        </div>
    );
};

export default FilterModal;