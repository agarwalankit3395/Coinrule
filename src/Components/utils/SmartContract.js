import { ethers } from 'ethers';
import ABI from "./ABI/ABI.json"
import USDTABI from "./ABI/USDT_ABI.json";


export const Smart_Contract_Address = "0x5514DFb2CD39Ac9C37BbC075BbAf09393444568b";
export const USDT_Contract_Address = "0x337610d27c682E347C9cD60BD4b3b107C9d34dDd";

export const get_provider = async (provider) => {
    const signer = new ethers.providers.Web3Provider(provider).getSigner();
    // const read_signer = new ethers.providers.Web3Provider(rpc_provider);
    return { signer };
}

export async function get_info(provider , accounts) {
    try {
        const bsc_rpc = await get_provider(provider);
        console.log(accounts    )

        const arbi_bot = new ethers.Contract(Smart_Contract_Address, ABI, bsc_rpc.signer);
        const usdt_token = new ethers.Contract(USDT_Contract_Address, USDTABI, bsc_rpc.signer);
        // const symbols = await usdt_token.owner();
        // console.log(symbols.toString());

        // const oneMonthCharge =await arbi_bot.checkSubscription2(accounts);
        // console.log(oneMonthCharge);
        return { usdt_token, arbi_bot };

    } catch (error) {
        console.log(error);
        return false;
    }
}