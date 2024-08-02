import React from 'react';

const Card = ({ title, value }) => {
    return (
        <div className="bg-accent p-5 rounded-lg shadow-md text-center flex-1 mx-2">
            <h3 className="text-lg mb-2">{title}</h3>
            <p className="text-xl font-bold">{value}</p>
        </div>
    );
};

export default Card;
