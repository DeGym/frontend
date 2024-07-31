import React from 'react';
import styles from '@/styles/components/FilterModal.module.css';

const MobileFilterModal = ({ isOpen, onClose, filters, handleFilterChange }) => {
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
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-end z-50" onClick={onClose}>
            <div className="bg-dark w-4/5 max-w-md h-full overflow-y-auto flex flex-col" onClick={(e) => e.stopPropagation()}>
                <div className="flex justify-between items-center p-5 border-b border-accent">
                    <h2 className="text-xl font-semibold">Filters</h2>
                    <button onClick={onClose} className={styles.closeButton}>&times;</button>
                </div>
                <div className="flex-grow p-5 overflow-y-auto">
                    <div className="mt-4">
                        <label className="block text-white mb-2">Radius distance up to <b>{filters.distance} km</b></label>
                        <input
                            type="range"
                            min={1}
                            max={15}
                            value={filters.distance}
                            onChange={(e) => handleFilterChange('distance', Number(e.target.value))}
                            className="w-full mb-2"
                        />

                    </div>
                    {['tier', 'activities', 'amenities'].map((filterType) => (
                        <div key={filterType} className="mb-6">
                            <h3 className="text-lg font-semibold mb-3">
                                {filterType === 'tier' ? 'Tier' :
                                    filterType === 'activities' ? 'Modalities' : 'Amenities'}
                            </h3>
                            {filterType === 'tier' ? (
                                <div className="flex flex-wrap gap-2">
                                    {tierOptions.map((option) => (
                                        <button
                                            key={option.value}
                                            className={`px-3 py-1 rounded-full text-sm ${filters.tier === option.value
                                                ? 'bg-primary text-dark hover:bg-secondary'
                                                : 'bg-accent text-light hover:bg-primary hover:text-dark'
                                                }`}
                                            onClick={() => handleFilterChange('tier', option.value)}
                                        >
                                            {option.label}
                                        </button>
                                    ))}
                                </div>
                            ) : (
                                <div className="flex flex-wrap gap-2">
                                    {(filterType === 'activities' ? ['Weightlifting', 'Yoga', 'Fighting', 'Dances', 'Pilates', 'Cross training', 'Swimming'] :
                                        ['Parking', 'Showers', 'Lockers', 'Snack Bar', 'Wi-Fi']).map((option) => (
                                            <button
                                                key={option}
                                                className={`px-3 py-1 rounded-full text-sm ${filters[filterType].includes(option)
                                                    ? 'bg-primary text-dark hover:bg-secondary'
                                                    : 'bg-accent text-light hover:bg-primary hover:text-dark'
                                                    }`}
                                                onClick={() => {
                                                    const newSelection = filters[filterType].includes(option)
                                                        ? filters[filterType].filter((item) => item !== option)
                                                        : [...filters[filterType], option];
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
                <div className="p-5 border-t border-accent">
                    <button onClick={onClose} className="w-full py-2 bg-primary text-dark rounded-md hover:bg-hoverButton">Apply Filters</button>
                </div>
            </div>
        </div>
    );
};

export default MobileFilterModal;
