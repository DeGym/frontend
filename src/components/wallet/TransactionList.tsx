import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faExternalLinkAlt, faSpinner } from '@fortawesome/free-solid-svg-icons';
import { useTransactions } from '@/hooks/useTransactions';

interface TransactionListProps {
    tokenType: 'ERC20' | 'ERC721';
}

const TransactionList: React.FC<TransactionListProps> = ({ tokenType }) => {
    const { transactions, isLoading, error } = useTransactions(tokenType);

    if (isLoading) {
        return <div className="loading"><FontAwesomeIcon icon={faSpinner} spin /> Loading transactions...</div>;
    }

    if (error) {
        return <div className="error">Error: {error}</div>;
    }

    return (
        <div className="transactions-list">
            {transactions.length > 0 ? (
                transactions.map(tx => (
                    <div key={tx.id} className="transaction-item">
                        <p>{tokenType === 'ERC20' ? tx.amount : `Token ID: ${tx.tokenId}`}</p>
                        <a href={`https://explorer.taraxa.io/tx/${tx.hash}`} target="_blank" rel="noopener noreferrer">
                            View on Explorer <FontAwesomeIcon icon={faExternalLinkAlt} />
                        </a>
                    </div>
                ))
            ) : (
                <p className="no-transactions">No transactions available</p>
            )}
        </div>
    );
};

export default TransactionList;