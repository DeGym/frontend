import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown, faChevronUp } from '@fortawesome/free-solid-svg-icons';
import styles from '@/styles/components/section/FAQ.module.css';

interface FAQItem {
    question: string;
    answer: string;
}

interface FAQProps {
    faqs: FAQItem[];
}

const FAQ: React.FC<FAQProps> = ({ faqs }) => {
    const [openIndex, setOpenIndex] = useState<number | null>(null);

    const toggleFAQ = (index: number) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <section className={styles.faqSection}>
            <h2 className={styles.faqTitle}>Frequently Asked Questions</h2>
            <div className={styles.faqList}>
                {faqs.map((faq, index) => (
                    <div key={index} className={styles.faqItem}>
                        <button
                            className={styles.faqQuestion}
                            onClick={() => toggleFAQ(index)}
                        >
                            {faq.question}
                            <FontAwesomeIcon
                                icon={openIndex === index ? faChevronUp : faChevronDown}
                                className={styles.faqIcon}
                            />
                        </button>
                        {openIndex === index && (
                            <div className={styles.faqAnswer}>{faq.answer}</div>
                        )}
                    </div>
                ))}
            </div>
        </section>
    );
};

export default FAQ;