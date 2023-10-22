import { ethers } from 'ethers';
import ABI from "./ABI/ABI.json"


export const Smart_Contract_Address = "0x5Ae96d1268D2C0533E531C8cFe1f436455c63529";

export const get_provider = async (provider) => {
    const signer = new ethers.providers.Web3Provider(provider).getSigner();
    // const read_signer = new ethers.providers.Web3Provider(rpc_provider);
    return { signer };
}

export async function get_info(provider , accounts) {
    try {
        const bsc_rpc = await get_provider(provider);
        console.log(accounts)

        const arbi_bot = new ethers.Contract(Smart_Contract_Address, ABI, bsc_rpc.signer);
        // const symbols = await usdt_token.owner();
        // console.log(symbols.toString());

        // const oneMonthCharge =await arbi_bot.checkSubscription2(accounts);
        // console.log(oneMonthCharge);
        return { arbi_bot };

    } catch (error) {
        console.log(error);
        return false;
    }
}