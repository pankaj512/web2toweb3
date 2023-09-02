import "dotenv/config";
import { ethers } from "ethers";
import { getProvider, getSigner } from "./utils.js";
import sanfordNFTAbi from "./abi/sanfordNFTAbi.js";

const address = "0x1927c4eB0806bc7ff4F145Bc252187af5b8ba32E";
const provider = getProvider();
const signer = getSigner().connect(provider);

const contract = new ethers.Contract(address, sanfordNFTAbi, signer);

const mintPrice = await contract.MINT_PRICE();

const mintPriceInEth = ethers.formatEther(mintPrice);

console.log(`Contract NFT mint price ${mintPriceInEth}ETH`);
