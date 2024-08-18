import React from 'react';
import styles from '@/styles/components/search/MobileGymsModal.module.css';

const MobileGymsModal = ({ isOpen, onClose, gyms }) => {
    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 bg-dark bg-opacity-50 flex justify-end z-50" onClick={onClose}>
            <div className="bg-dark w-4/5 max-w-md h-full overflow-y-auto flex flex-col" onClick={(e) => e.stopPropagation()} z-index="z-50">
                <div className="flex justify-between items-center p-5 border-b border-accent">
                    <h2 className="text-xl font-semibold">Gyms</h2>
                    <button onClick={onClose} className={styles.closeButton}>&times;</button>
                </div>
                <div className="flex-grow p-5 overflow-y-auto">
                    <p className="font-bold mb-5">{gyms.length} gyms found</p>
                    {gyms.map((gym, index) => (
                        <div key={index} className="mb-5 p-3 rounded-md bg-accent">
                            <img src={gym.image} alt={gym.name} className="w-full h-48 object-cover rounded-md mb-3" />
                            <div>
                                <h3 className="font-semibold mb-1">{gym.name}</h3>
                                <p className="text-sm mb-1">{gym.address}</p>
                                <p className="text-sm text-primary mb-1">{gym.distance} m</p>
                                <p className="text-sm font-bold">Available from DG {gym.tier}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default MobileGymsModal;