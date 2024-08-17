import React, { createContext, useContext, useState, useEffect, useCallback, useMemo } from 'react';
import Web3 from 'web3';
import { useToast } from '@/context/ToastContext';

interface WalletContextType {
    web3: Web3 | null;
    account: string | null;
    isCorrectNetwork: boolean;
    balance: string | null;
    connectWallet: () => Promise<void>;
    disconnectWallet: () => void;
    switchNetwork: () => Promise<void>;
}

const WalletContext = createContext<WalletContextType | undefined>(undefined);

export const WalletProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const [web3, setWeb3] = useState<Web3 | null>(null);
    const [account, setAccount] = useState<string | null>(null);
    const [isCorrectNetwork, setIsCorrectNetwork] = useState(false);
    const [balance, setBalance] = useState<string | null>(null);

    const { showToast } = useToast?.() ?? { showToast: console.log };

    const TARGET_NETWORK_ID = 841; // Taraxa Mainnet
    const TARGET_NETWORK_HEX = '0x349'; // Hexadecimal representation of 841
    const TARAXA_RPC_URL = 'https://rpc.mainnet.taraxa.io';

    const checkNetwork = useCallback(async (web3Instance: Web3) => {
        try {
            const networkId = await web3Instance.eth.net.getId();
            console.log('Network ID:', networkId);

            // Convert networkId to a regular number if it's a BigInt
            const normalizedNetworkId = typeof networkId === 'bigint' ? Number(networkId) : networkId;

            setIsCorrectNetwork(normalizedNetworkId === TARGET_NETWORK_ID);
            console.log('Is correct network:', normalizedNetworkId === TARGET_NETWORK_ID);
        } catch (error) {
            console.error('Error checking network:', error);
            showToast('Failed to check network', 'error');
        }
    }, [showToast]);

    const updateBalance = useCallback(async (web3Instance: Web3, address: string) => {
        try {
            const balanceWei = await web3Instance.eth.getBalance(address);
            const balanceEth = web3Instance.utils.fromWei(balanceWei, 'ether');
            setBalance(parseFloat(balanceEth).toFixed(4));
        } catch (error) {
            console.error('Error fetching balance:', error);
            showToast('Failed to fetch balance', 'error');
        }
    }, [showToast]);

    const switchNetwork = useCallback(async () => {
        if (!window.ethereum) {
            showToast('MetaMask is not installed', 'error');
            return;
        }

        try {
            console.log('Attempting to switch to network:', TARGET_NETWORK_HEX);
            await window.ethereum.request({
                method: 'wallet_switchEthereumChain',
                params: [{ chainId: TARGET_NETWORK_HEX }],
            });
            console.log('Successfully switched network');
        } catch (switchError: any) {
            console.error('Error switching network:', switchError);
            if (switchError.code === 4902) {
                try {
                    console.log('Network not found, attempting to add Taraxa network');
                    await window.ethereum.request({
                        method: 'wallet_addEthereumChain',
                        params: [
                            {
                                chainId: TARGET_NETWORK_HEX,
                                chainName: 'Taraxa Mainnet',
                                nativeCurrency: {
                                    name: 'Taraxa',
                                    symbol: 'TARA',
                                    decimals: 18
                                },
                                rpcUrls: [TARAXA_RPC_URL],
                                blockExplorerUrls: ['https://explorer.taraxa.io/'],
                            },
                        ],
                    });
                    console.log('Successfully added Taraxa network');
                } catch (addError) {
                    console.error('Failed to add the Taraxa network:', addError);
                    showToast('Failed to add the Taraxa network', 'error');
                }
            } else {
                console.error('Failed to switch to the Taraxa network:', switchError);
                showToast('Failed to switch to the Taraxa network', 'error');
            }
        }

        if (web3) {
            await checkNetwork(web3);
        }
    }, [web3, checkNetwork, showToast]);

    const connectWallet = useCallback(async () => {
        if (typeof window !== 'undefined' && typeof window.ethereum !== 'undefined') {
            try {
                await window.ethereum.request({ method: 'eth_requestAccounts' });
                const web3Instance = new Web3(window.ethereum);
                setWeb3(web3Instance);
                const accounts = await web3Instance.eth.getAccounts();
                setAccount(accounts[0]);
                await checkNetwork(web3Instance);
                await updateBalance(web3Instance, accounts[0]);
            } catch (error) {
                console.error('Failed to connect to wallet:', error);
                showToast('Failed to connect wallet', 'error');
            }
        } else {
            showToast('Please install MetaMask!', 'error');
        }
    }, [checkNetwork, updateBalance, showToast]);

    const disconnectWallet = useCallback(() => {
        setWeb3(null);
        setAccount(null);
        setIsCorrectNetwork(false);
        setBalance(null);
    }, []);

    useEffect(() => {
        if (window.ethereum) {
            window.ethereum.on('accountsChanged', (accounts: string[]) => {
                setAccount(accounts[0] || null);
                if (web3 && accounts[0]) {
                    updateBalance(web3, accounts[0]);
                }
            });
            window.ethereum.on('chainChanged', () => {
                if (web3) {
                    checkNetwork(web3);
                }
            });
        }
        return () => {
            if (window.ethereum) {
                window.ethereum.removeAllListeners();
            }
        };
    }, [web3, checkNetwork, updateBalance]);

    const contextValue = useMemo(() => ({
        web3,
        account,
        isCorrectNetwork,
        balance,
        connectWallet,
        disconnectWallet,
        switchNetwork,
    }), [web3, account, isCorrectNetwork, balance, connectWallet, disconnectWallet, switchNetwork]);

    return (
        <WalletContext.Provider value={contextValue}>
            {children}
        </WalletContext.Provider>
    );
};

export const useWallet = () => {
    const context = useContext(WalletContext);
    if (context === undefined) {
        throw new Error('useWallet must be used within a WalletProvider');
    }
    return context;
};