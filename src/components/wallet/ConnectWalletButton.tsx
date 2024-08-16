import React from 'react';
import { useWeb3 } from '@/hooks/useWeb3';
import WalletInfo from './WalletInfo';
import ConnectButton from './ConnectButton';

const ConnectWalletButton: React.FC = () => {
    const { account } = useWeb3();

    return (
        <div className="wallet-container">
            {account ? <WalletInfo /> : <ConnectButton />}
        </div>
    );
};

export default ConnectWalletButton;