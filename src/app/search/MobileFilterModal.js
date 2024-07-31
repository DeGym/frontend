import React from 'react';

const MobileFilterModal = ({ isOpen, onClose, filters, handleFilterChange }) => {
    if (!isOpen) return null;

    const tierOptions = [
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
            <div className="bg-[var(--color-dark)] w-4/5 max-w-md h-full overflow-y-auto flex flex-col" onClick={(e) => e.stopPropagation()}>
                <div className="flex justify-between items-center p-5 border-b border-[var(--color-accent)]">
                    <h2 className="text-xl font-semibold">Filters</h2>
                    <button onClick={onClose} className="text-xl text-[var(--color-light)] hover:text-[var(--color-primary)] w-8 h-8 flex items-center justify-center">&times;</button>
                </div>
                <div className="flex-grow p-5 overflow-y-auto">
                    {['tier', 'activities', 'amenities'].map((filterType) => (
                        <div key={filterType} className="mb-6">
                            <h3 className="text-lg font-semibold mb-3">
                                {filterType === 'tier' ? 'Tier' :
                                    filterType === 'activities' ? 'Modalidades' : 'Comodidades'}
                            </h3>
                            {filterType === 'tier' ? (
                                <div className="flex flex-wrap gap-2">
                                    {tierOptions.map((option) => (
                                        <button
                                            key={option.value}
                                            className={`px-3 py-1 rounded-full text-sm ${filters.tier.includes(option.value)
                                                ? 'bg-[var(--color-primary)] text-[var(--color-dark)] hover:bg-[var(--color-secondary)]'
                                                : 'bg-[var(--color-accent)] text-[var(--color-light)] hover:bg-[var(--color-primary)] hover:text-[var(--color-dark)]'
                                                }`}
                                            onClick={() => {
                                                const newSelection = filters.tier.includes(option.value)
                                                    ? filters.tier.filter((item) => item !== option.value)
                                                    : [...filters.tier, option.value];
                                                handleFilterChange('tier', newSelection);
                                            }}
                                        >
                                            {option.label}
                                        </button>
                                    ))}
                                </div>
                            ) : (
                                <div className="flex flex-wrap gap-2">
                                    {(filterType === 'activities' ? ['Musculação', 'Yoga', 'Pilates', 'Crossfit', 'Natação'] :
                                        ['Estacionamento', 'Chuveiros', 'Armários', 'Lanchonete', 'Wi-Fi']).map((option) => (
                                            <button
                                                key={option}
                                                className={`px-3 py-1 rounded-full text-sm ${filters[filterType].includes(option)
                                                    ? 'bg-[var(--color-primary)] text-[var(--color-dark)] hover:bg-[var(--color-secondary)]'
                                                    : 'bg-[var(--color-accent)] text-[var(--color-light)] hover:bg-[var(--color-primary)] hover:text-[var(--color-dark)]'
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
                    <div className="mt-4">
                        <label className="block text-white mb-2">Distância</label>
                        <input
                            type="range"
                            min={1}
                            max={15}
                            value={filters.distance}
                            onChange={(e) => handleFilterChange('distance', Number(e.target.value))}
                            className="w-full mb-2"
                        />
                        <span className="block text-white">até {filters.distance} km</span>
                    </div>
                </div>
                <div className="p-5 border-t border-[var(--color-accent)]">
                    <button onClick={onClose} className="w-full py-2 bg-[var(--color-primary)] text-[var(--color-dark)] rounded-md hover:bg-hoverButton">Apply Filters</button>
                </div>
            </div>
        </div>
    );
};

export default MobileFilterModal;
