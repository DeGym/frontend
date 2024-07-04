"use client";

import React, { useState } from 'react';
import styles from '../styles/components/FAQ.module.css'; // Import your CSS module for styling

const FAQ = ({ faqs }) => {
    const [activeIndex, setActiveIndex] = useState(null);

    const toggleFAQ = (index) => {
        setActiveIndex(activeIndex === index ? null : index); // Toggle the active index to show/hide the answer
    };

    return (
        <>
            <h2 className={styles.title}><b>FAQ</b></h2>
            <h3 className={styles.subTitle}>Frequently asked questions</h3>
            <div className={styles.faqContainer}>
                {faqs.map((faq, index) => (
                    <div key={index} className={styles.faqItem}>
                        <button
                            className={styles.faqQuestion}
                            onClick={() => toggleFAQ(index)}
                        >
                            {faq.question}
                            <span className={styles.icon}>
                                {activeIndex === index ? '-' : '+'}
                            </span>
                        </button>
                        <div
                            className={`${styles.faqAnswer} ${activeIndex === index ? styles.active : ''}`}
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
