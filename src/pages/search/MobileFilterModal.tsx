import React from 'react';
import styles from '@/styles/components/search/MobileFilterModal.module.css';

interface Filters {
    distance: number;
    tier: number | null;
    activities: string[];
    amenities: string[];
}

interface MobileFilterModalProps {
    isOpen: boolean;
    onClose: () => void;
    filters: Filters;
    handleFilterChange: (filterName: string, value: any) => void;
}

const MobileFilterModal: React.FC<MobileFilterModalProps> = ({
    isOpen,
    onClose,
    filters,
    handleFilterChange
}) => {
    if (!isOpen) return null;

    const tierOptions = [
        { label: 'All', value: null },
        { label: 'Basic', value: 1 },
        { label: 'Silver', value: 2 },
        { label: 'Gold', value: 3 },
        { label: 'Platinum', value: 4 },
        { label: 'Diamond', value: 5 },
        { label: 'Black', value: 6 },
        { label: 'Personalized', value: 7 }
    ];

    return (
        <div className={styles.modalOverlay} onClick={onClose}>
            <div className={styles.modalContent} onClick={(e) => e.stopPropagation()}>
                <div className={styles.modalHeader}>
                    <h2>Filters</h2>
                    <button onClick={onClose} className={styles.closeButton}>&times;</button>
                </div>
                <div className={styles.modalBody}>
                    <div className={styles.filterSection}>
                        <label className={styles.filterLabel}>
                            Radius distance up to <b>{filters.distance} km</b>
                        </label>
                        <input
                            type="range"
                            min={1}
                            max={15}
                            value={filters.distance}
                            onChange={(e) => handleFilterChange('distance', Number(e.target.value))}
                            className={styles.rangeInput}
                        />
                    </div>
                    {['tier', 'activities', 'amenities'].map((filterType) => (
                        <div key={filterType} className={styles.filterSection}>
                            <h3 className={styles.filterTitle}>
                                {filterType === 'tier' ? 'Tier' :
                                    filterType === 'activities' ? 'Modalities' : 'Amenities'}
                            </h3>
                            {filterType === 'tier' ? (
                                <div className={styles.optionsContainer}>
                                    {tierOptions.map((option) => (
                                        <button
                                            key={option.value}
                                            className={`${styles.optionButton} ${filters.tier === option.value
                                                ? styles.selectedOption
                                                : styles.unselectedOption
                                                }`}
                                            onClick={() => handleFilterChange('tier', option.value)}
                                        >
                                            {option.label}
                                        </button>
                                    ))}
                                </div>
                            ) : (
                                <div className={styles.optionsContainer}>
                                    {(filterType === 'activities' ? ['Weightlifting', 'Yoga', 'Fighting', 'Dances', 'Pilates', 'Cross training', 'Swimming'] :
                                        ['Parking', 'Showers', 'Lockers', 'Snack Bar', 'Wi-Fi']).map((option) => (
                                            <button
                                                key={option}
                                                className={`${styles.optionButton} ${filters[filterType as keyof Filters].includes(option)
                                                    ? styles.selectedOption
                                                    : styles.unselectedOption
                                                    }`}
                                                onClick={() => {
                                                    const newSelection = filters[filterType as keyof Filters].includes(option)
                                                        ? filters[filterType as keyof Filters].filter((item) => item !== option)
                                                        : [...filters[filterType as keyof Filters], option];
                                                    handleFilterChange(filterType, newSelection);
                                                }}
                                            >
                                                {option}
                                            </button>
                                        ))}
                                </div>
                            )}
                        </div>
                    ))}
                </div>
                <div className={styles.modalFooter}>
                    <button onClick={onClose} className={styles.applyButton}>Apply Filters</button>
                </div>
            </div>
        </div>
    );
};

export default MobileFilterModal;