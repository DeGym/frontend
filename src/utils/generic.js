const shortenWalletAddress = (address) => {
    if (address.length === 42) {
        return `${address.slice(0, 6)}...${address.slice(-4)}`;
    }
    return address;
};
export default shortenWalletAddress;