"use client";

import React, { useState } from 'react';

const FAQ = ({ faqs }) => {
    const [activeIndex, setActiveIndex] = useState(null);

    const toggleFAQ = (index) => {
        setActiveIndex(activeIndex === index ? null : index);
    };

    return (
        <>
            <h2 className="text-center text-3xl"><b>FAQ</b></h2>
            <p className="text-center text-xl mb-5">Frequently asked questions</p>
            <div className="w-full max-w-4xl mx-auto bg-accent rounded-lg p-5 shadow-lg">
                {faqs.map((faq, index) => (
                    <div key={index} className="mb-4">
                        <button
                            className="px-2 w-full text-left bg-transparent border-transparent text-light text-lg font-bold py-3 cursor-pointer flex justify-between items-center"
                            onClick={() => toggleFAQ(index)}
                        >
                            {faq.question}
                            <span className="ml-2">{activeIndex === index ? '-' : '+'}</span>
                        </button>
                        <div
                            className={`overflow-hidden transition-max-height duration-300 ease-in-out text-gray-300 text-base pl-3 ${activeIndex === index ? 'max-h-40 py-2' : 'max-h-0'}`}
                        >
                            {faq.answer}
                        </div>
                    </div>
                ))}
            </div>
        </>
    );
};

export default FAQ;
