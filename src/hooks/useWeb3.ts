import { useEffect, useState } from 'react';
import Web3 from 'web3';
import { useAppContext } from '@/context/AppContext';
import { useToast } from '@/context/ToastContext';

export const useWeb3 = () => {
    const [web3, setWeb3] = useState<Web3 | null>(null);
    const { state, dispatch } = useAppContext();
    const { showToast } = useToast();

    useEffect(() => {
        const initWeb3 = async () => {
            if (typeof window !== 'undefined' && typeof window.ethereum !== 'undefined') {
                try {
                    await window.ethereum.request({ method: 'eth_requestAccounts' });
                    const web3Instance = new Web3(window.ethereum);
                    setWeb3(web3Instance);

                    const accounts = await web3Instance.eth.getAccounts();
                    const balance = await web3Instance.eth.getBalance(accounts[0]);

                    dispatch({
                        type: 'SET_USER',
                        payload: { address: accounts[0], balance: web3Instance.utils.fromWei(balance, 'ether') },
                    });
                } catch (error) {
                    console.error('Error initializing web3', error);
                    showToast('Failed to connect to wallet', 'error');
                }
            } else {
                showToast('Please install MetaMask!', 'error');
            }
        };

        initWeb3();
    }, [dispatch, showToast]);

    const connectWallet = async () => {
        if (web3) {
            try {
                const accounts = await web3.eth.requestAccounts();
                const balance = await web3.eth.getBalance(accounts[0]);

                dispatch({
                    type: 'SET_USER',
                    payload: { address: accounts[0], balance: web3.utils.fromWei(balance, 'ether') },
                });

                showToast('Wallet connected successfully', 'success');
            } catch (error) {
                console.error('Error connecting wallet', error);
                showToast('Failed to connect wallet', 'error');
            }
        }
    };

    return { web3, connectWallet, user: state.user };
};