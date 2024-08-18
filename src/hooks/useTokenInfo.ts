import { useState, useEffect } from 'react';
import axios from 'axios';

interface TokenInfo {
    name: string;
    symbol: string;
    totalSupply: string;
    price: string;
    staking: string;
    locked: string;
    ratio: string;
}

export const useTokenInfo = (contractAddress: string) => {
    const [tokenInfo, setTokenInfo] = useState<TokenInfo>({
        name: 'DeGym Token',
        symbol: 'DGYM',
        totalSupply: '1000000000',
        price: '0.00000001',
        staking: '1000000000',
        locked: '500000000',
        ratio: '1:1'
    });
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);

    const fetchTokenInfo = async () => {
        setIsLoading(true);
        setError(null);
        try {
            const response = await axios.get(`https://tara.to/api`, {
                params: {
                    module: 'token',
                    action: 'getToken',
                    contractaddress: contractAddress
                }
            });

            if (response.data.status === '1') {
                const result = response.data.result;
                setTokenInfo({
                    name: result.name,
                    symbol: result.symbol,
                    totalSupply: result.totalSupply,
                    price: result.price,
                    staking: result.staking,
                    locked: result.locked,
                    ratio: result.ratio
                });
            } else {
                throw new Error(response.data.message || 'Failed to fetch token info');
            }
        } catch (err) {
            console.error('Error fetching token info:', err);
            setError('Failed to load token information. Using default data.');
        } finally {
            setIsLoading(false);
        }
    };

    return { tokenInfo, isLoading, error, fetchTokenInfo };
};