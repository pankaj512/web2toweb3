import "dotenv/config";
import { ethers } from "ethers";

const getProvider = (mainnet = false) => {
  const providerURL = mainnet
    ? `https://eth-mainnet.g.alchemy.com/v2/${process.env.ALCHEMY_KEY}`
    : `https://eth-sepolia.g.alchemy.com/v2/${process.env.ALCHEMY_KEY}`;

  return new ethers.JsonRpcProvider(providerURL);
};

const generateWallet = () => {
  const wallet = new ethers.Wallet(process.env.PRIVATE_KEY);
  console.log("wallet address: " + wallet.address);
  return wallet;
};

const getSigner = (mainnet = false) => {
  const provider = getProvider(mainnet);
  return new ethers.Wallet(process.env.PRIVATE_KEY, provider);
};

export { getProvider, generateWallet, getSigner };

// const provider = getProvider();
// console.log("Provider", await provider.getBlockNumber());

generateWallet();

// const signer = getSigner();
// console.log("signer address: " + signer.address);
