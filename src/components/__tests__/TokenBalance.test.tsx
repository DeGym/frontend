import React from 'react';
import { render, screen } from '@testing-library/react';
import TokenBalance from '../TokenBalance';
import { useWeb3 } from '@/hooks/useWeb3';
import { useTokenContract } from '@/hooks/useTokenContract';

jest.mock('@/hooks/useWeb3');
jest.mock('@/hooks/useTokenContract');

describe('TokenBalance', () => {
    it('renders loading state when balance is null', () => {
        (useWeb3 as jest.Mock).mockReturnValue({ account: '0x123' });
        (useTokenContract as jest.Mock).mockReturnValue({ balance: null, getBalance: jest.fn() });

        render(<TokenBalance />);
        expect(screen.getByText('Loading...')).toBeInTheDocument();
    });

    it('renders balance when available', () => {
        (useWeb3 as jest.Mock).mockReturnValue({ account: '0x123' });
        (useTokenContract as jest.Mock).mockReturnValue({ balance: '100', getBalance: jest.fn() });

        render(<TokenBalance />);
        expect(screen.getByText('100 DGYM')).toBeInTheDocument();
    });
});