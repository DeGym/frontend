import React, { useState } from 'react';
import styles from '../../styles/components/FilterModal.module.css';

const FilterModal = ({ isOpen, onClose, title, options, selectedOptions, onChange, type, min, max, value }) => {
    if (!isOpen) return null;

    const [searchTerm, setSearchTerm] = useState('');

    const filteredOptions = options.filter(option =>
        option.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <div className={styles.overlay} onClick={onClose}>
            <div className={styles.modal} onClick={(e) => e.stopPropagation()}>
                <div className={styles.header}>
                    <h2 className={styles.title}>{title}</h2>
                    <button onClick={onClose} className={styles.closeButton}>&times;</button>
                </div>
                {type !== 'range' && (
                    <input
                        type="text"
                        placeholder={`Search for ${title.toLowerCase()}`}
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                        className={styles.searchInput}
                    />
                )}
                <div>
                    <div className={styles.optionsContainer}>
                        {filteredOptions.map((option) => (
                            <button
                                key={option}
                                className={`${styles.optionButton} ${selectedOptions.includes(option)
                                    ? styles.selectedOption
                                    : styles.unselectedOption
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
                </div>
                <div className={styles.footer}>
                    <button onClick={() => onChange([])} className={styles.clearButton}>Clear</button>
                    <button onClick={onClose} className={styles.applyButton}>Apply</button>
                </div>
            </div>
        </div>
    );
};

export default FilterModal;
