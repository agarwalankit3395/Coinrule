import React, { useState } from "react";

export const web3Context = React.createContext();

export const Web3ContextProvider = ({
    children,
}) => {
    const [walletAddress, setWalletAddress] = useState(null);

    return (
        <web3Context.Provider
            value={{
                walletAddress,
                setWalletAddress
            }}
        >
            {children}
        </web3Context.Provider>
    );
};