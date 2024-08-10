import React from 'react';

const Card = ({ title, value }) => {
    return (
        <div className="bg-accent p-5 rounded-lg shadow-md text-center flex-1 mx-2">
            <h2 className="text-3xl text-left font-bold mt-2 text-primary">{value}</h2>
            <p className="text-sm text-left first-line:mb-2">{title}</p>
        </div>
    );
};

export default Card;
