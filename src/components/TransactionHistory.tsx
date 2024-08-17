import React, { useState, useEffect } from 'react';
import { useERC20 } from '@/hooks/useERC20';
import { useERC721 } from '@/hooks/useERC721';
import { useWallet } from '@/context/WalletContext';

const ERC20_ADDRESS = '0x063F255689b00A877F6be55109b3ECA24e266809'; // DGYM token address
const ERC721_ADDRESS = '0x752A41D144d1c2c814958E4050adda59CB496a4b'; // NFT contract address

interface TransactionHistoryProps {
    activeTokenType: 'ERC20' | 'ERC721';
}

const TransactionHistory: React.FC<TransactionHistoryProps> = ({ activeTokenType }) => {
    const { account } = useWallet();
    const { getBalance, transfer, getTransactionHistory: getERC20History } = useERC20(ERC20_ADDRESS);
    const { getTransactionHistory: getERC721History } = useERC721(ERC721_ADDRESS);
    const [transactions, setTransactions] = useState<any[]>([]);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchTransactions = async () => {
            if (account) {
                setIsLoading(true);
                setError(null);
                try {
                    let txs;
                    if (activeTokenType === 'ERC20') {
                        txs = await getERC20History(account);
                    } else {
                        txs = await getERC721History(account);
                    }
                    setTransactions(txs.sort((a, b) => b.timestamp - a.timestamp));
                } catch (err) {
                    console.error('Error fetching transactions:', err);
                    setError('Failed to fetch transactions. Please try again later.');
                } finally {
                    setIsLoading(false);
                }
            }
        };

        fetchTransactions();
    }, [account, activeTokenType, getERC20History, getERC721History]);

    if (isLoading) return <p>Loading transactions...</p>;
    if (error) return <p>{error}</p>;

    return (
        <div>
            {transactions.map((tx, index) => (
                <div key={index}>
                    {tx.type === 'ERC20' ? (
                        <p>{`${tx.amount} ${tx.symbol} - ${tx.from} to ${tx.to}`}</p>
                    ) : (
                        <p>{`Token ID ${tx.tokenId} - ${tx.from} to ${tx.to}`}</p>
                    )}
                </div>
            ))}
            {transactions.length === 0 && <p>No transactions available</p>}
        </div>
    );
};

export default TransactionHistory;