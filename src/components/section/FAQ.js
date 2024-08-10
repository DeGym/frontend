"use client";

import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import styles from '@/styles/components/section/FAQ.module.css';

const FAQ = ({ faqs }) => {
    const [activeIndex, setActiveIndex] = useState(null);

    const toggleFAQ = (index) => {
        setActiveIndex(activeIndex === index ? null : index);
    };

    return (
        <div className={styles.faqContainer}>
            <div className={styles.faqContent}>
                <div className={styles.faqText}>
                    <h2 className={styles.heading}><b>Got Questions? <br />We've got Answers</b></h2>
                    <p className={styles.subheading}>Frequently asked questions.</p>
                    <a
                        href="/discord"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <button className={styles.submitQuestionButton}>

                            Submit a Question <FontAwesomeIcon icon={faArrowRight} />
                        </button>
                    </a>

                </div>
                <div
                    className={styles.faqList}
                    style={{
                        backgroundImage: 'url(/img/main-grid.svg)',
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                    }}
                >
                    {faqs.map((faq, index) => (
                        <div key={index} className={styles.faqItem}>
                            <button
                                className={styles.faqQuestion}
                                onClick={() => toggleFAQ(index)}
                            >
                                {faq.question}
                                <span className={styles.toggleIcon}>{activeIndex === index ? '-' : '+'}</span>
                            </button>
                            <div
                                className={`${styles.faqAnswer} ${activeIndex === index ? styles.activeAnswer : ''}`}
                            >
                                {faq.answer}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default FAQ;
