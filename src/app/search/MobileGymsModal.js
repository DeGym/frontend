import React from 'react';

const MobileGymsModal = ({ isOpen, onClose, gyms }) => {
    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-end z-50" onClick={onClose}>
            <div className="bg-[var(--color-dark)] w-4/5 max-w-md h-full overflow-y-auto flex flex-col" onClick={(e) => e.stopPropagation()} z-index="z-50">
                <div className="flex justify-between items-center p-5 border-b border-[var(--color-accent)]">
                    <h2 className="text-xl font-semibold">Gyms</h2>
                    <button onClick={onClose} className="text-xl text-[var(--color-light)] hover:text-[var(--color-primary)] w-8 h-8 flex items-center justify-center">&times;</button>
                </div>
                <div className="flex-grow p-5 overflow-y-auto">
                    <p className="font-bold mb-5">Foram encontradas {gyms.length} gyms</p>
                    {gyms.map((gym, index) => (
                        <div key={index} className="mb-5 p-3 border border-[var(--color-accent)] rounded-md">
                            <img src={gym.image} alt={gym.name} className="w-full h-48 object-cover rounded-md mb-3" />
                            <div>
                                <h3 className="font-semibold mb-1">{gym.name}</h3>
                                <p className="text-sm mb-1">{gym.address}</p>
                                <p className="text-sm text-[var(--color-primary)] mb-1">{gym.distance} m</p>
                                <p className="text-sm font-bold">Disponível a partir do TP 1</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default MobileGymsModal;