import "dotenv/config";
import { ethers } from "ethers";
import { getProvider, getSigner } from "./utils.js";

const address = "0x1927c4eB0806bc7ff4F145Bc252187af5b8ba32E";
const provider = getProvider();
const signer = getSigner().connect(provider);

const mintPrice = ethers.parseEther("0.01");
const mintCallData = "0x1249c58b";

console.log("Minting NFT!");

const mintTx = await signer.sendTransaction({
  to: address,
  value: mintPrice,
  data: mintCallData,
});

console.log("TX send", mintTx.hash);

await mintTx.wait();

console.log("TX mined");
