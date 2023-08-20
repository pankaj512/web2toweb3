import "dotenv/config";
import { ethers } from "ethers";

// const provides = ethers.getDefaultProvider();

// const network = "mainnet";
// const provider = ethers.AlchemyProvider(network, process.env.ALCHEMY_KEY);

const providerurl = `https://eth-mainnet.g.alchemy.com/v2/${process.env.ALCHEMY_KEY}`;
const provider = new ethers.JsonRpcProvider(providerurl);

// console.log("Current block number: ", await provider.getBlockNumber());

const address = await provider.resolveName("bowtiefriday.eth");

console.log("Bowtiefriday.eth: ", address);

const balance = await provider.getBalance(address);

console.log("Balance Of BowTieFriday.eth: ", ethers.formatEther(balance));

// ethers.parseEther = convert 1.5 ETH to HEX or WEI
// ethers.formatEther = convert WEI to ETH
