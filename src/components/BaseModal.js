import React from 'react';

const BaseModal = ({ isOpen, onClose, title, children }) => {
    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 bg-accent bg-opacity-75 flex justify-center items-center z-50" onClick={onClose}>
            <div className="bg-light dark:bg-accent p-6 rounded-lg w-auto max-w-full z-60 shadow-lg" onClick={(e) => e.stopPropagation()}>
                <div className="flex justify-between items-center mb-4">
                    <h2 className="text-lg font-semibold">{title}</h2>
                    <button
                        onClick={onClose}
                        className="bg-transparent text-light border-light hover:bg-[#f8717130] hover:text-red-800 hover:border-red-800 rounded-full w-8 h-8 flex items-center justify-center transition-colors duration-200"
                    >
                        &times;
                    </button>
                </div>
                {children}
            </div>
        </div>
    );
};

export default BaseModal;
