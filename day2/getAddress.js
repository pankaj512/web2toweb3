import "dotenv/config";
import { ethers } from "ethers";
import { getProvider, getSigner } from "./utils.js";

const sepoliaProvider = getProvider();
// const mainnetprovider = getProvider(true);

let sepoliaSigner = getSigner(sepoliaProvider);
sepoliaSigner = sepoliaSigner.connect(sepoliaProvider);

const balance = ethers.formatEther(
  await sepoliaProvider.provider.getBalance(sepoliaSigner.address)
);

console.log("address: " + sepoliaSigner.address);
console.log("balance: " + balance);
