import React, { useState } from 'react';
import styles from '@/styles/components/search/FilterModal.module.css';
import BaseModal from '@/components/common/BaseModal';

const FilterModal = ({ isOpen, onClose, title, options, selectedOptions, onChange, type, min, max, value }) => {
    if (!isOpen) return null;

    const [searchTerm, setSearchTerm] = useState('');

    const filteredOptions = options.filter(option =>
        option.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <BaseModal isOpen={isOpen} onClose={onClose} title={title}>
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
                            className={`${styles.optionButton} ${selectedOptions === option
                                ? styles.selectedOption
                                : styles.unselectedOption
                                }`}
                            onClick={() => onChange(option)}
                        >
                            {option}
                        </button>
                    ))}
                </div>
            </div>
            <div className={styles.footer}>
                <button onClick={() => onChange(null)} className={styles.clearButton}>Clear</button>
                <button onClick={onClose} className={styles.applyButton}>Apply</button>
            </div>
        </BaseModal>
    );
};

export default FilterModal;