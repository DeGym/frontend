import React, { useState } from 'react';
import Modal from '@/components/ui/Modal';
import styles from '@/styles/components/search/FilterModal.module.css';

interface FilterModalProps {
    isOpen: boolean;
    onClose: () => void;
    title: string;
    options: (string | number)[];
    selectedOptions: (string | number)[] | null;
    onChange: (value: (string | number)[] | null) => void;
    type: 'checkbox' | 'radio';
}

const FilterModal: React.FC<FilterModalProps> = ({
    isOpen,
    onClose,
    title,
    options,
    selectedOptions,
    onChange,
    type
}) => {
    const [searchTerm, setSearchTerm] = useState('');

    const filteredOptions = options.filter(option =>
        option.toString().toLowerCase().includes(searchTerm.toLowerCase())
    );

    const handleOptionChange = (option: string | number) => {
        if (type === 'checkbox') {
            const newSelection = selectedOptions?.includes(option)
                ? selectedOptions.filter(item => item !== option)
                : [...(selectedOptions || []), option];
            onChange(newSelection.length > 0 ? newSelection : null);
        } else {
            onChange(option === selectedOptions?.[0] ? null : [option]);
        }
    };

    return (
        <Modal isOpen={isOpen} onClose={onClose} title={title}>
            <div className={styles.filterModal}>
                <input
                    type="text"
                    placeholder={`Search for ${title.toLowerCase()}`}
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className={styles.searchInput}
                />
                <div className={styles.optionsContainer}>
                    {filteredOptions.map((option) => (
                        <button
                            key={option}
                            className={`${styles.optionButton} ${selectedOptions?.includes(option)
                                ? styles.selectedOption
                                : styles.unselectedOption
                                }`}
                            onClick={() => handleOptionChange(option)}
                        >
                            {option}
                        </button>
                    ))}
                </div>
                <div className={styles.footer}>
                    <button onClick={() => onChange(null)} className={styles.clearButton}>Clear</button>
                    <button onClick={onClose} className={styles.applyButton}>Apply</button>
                </div>
            </div>
        </Modal>
    );
};

export default FilterModal;