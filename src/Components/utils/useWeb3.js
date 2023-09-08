import { useContext } from "react";
import { web3Context } from "./WalletContext";

const useWeb3 = () => {
    const { walletAddress, setWalletAddress } = useContext(web3Context);
    return {
        walletAddress,
        setWalletAddress
    }
}

export default useWeb3;