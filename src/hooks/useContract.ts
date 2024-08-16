import { useState, useEffect } from 'react';
import { AbiItem } from 'web3-utils';
import { Contract } from 'web3-eth-contract';
import { useWeb3 } from './useWeb3';

export const useContract = (contractABI: AbiItem[], contractAddress: string) => {
    const { web3 } = useWeb3();
    const [contract, setContract] = useState<Contract<AbiItem[]> | null>(null);

    useEffect(() => {
        if (web3) {
            const contractInstance = new web3.eth.Contract(contractABI, contractAddress);
            setContract(contractInstance);
        }
    }, [web3, contractABI, contractAddress]);

    return contract;
};