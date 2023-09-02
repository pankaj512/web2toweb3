import "dotenv/config";
import { ethers } from "ethers";
import { getProvider, getSigner } from "./utils.js";

const sepoliaProvider = getProvider();
const mainnetprovider = getProvider(true);

let sepoliaSigner = getSigner(sepoliaProvider);
sepoliaSigner = sepoliaSigner.connect(sepoliaProvider);
console.log("Signer address: " + sepoliaSigner.address);

const balance = ethers.formatEther(
  await sepoliaProvider.provider.getBalance(sepoliaSigner.address)
);
console.log("Signer Balance: " + balance);

const myAddress = await mainnetprovider.resolveName("bowtiefriday.eth");
console.log("my Address: " + myAddress);

console.log("Sending ETH to " + myAddress);

const tx = await sepoliaSigner.sendTransaction({
  to: myAddress,
  value: ethers.parseEther((balance * 0.01).toString()),
});

console.log("TX is mempool", tx.hash);

await tx.wait();

console.log("Tx is confirmed");
