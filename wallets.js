import "dotenv/config";
import { Transaction, ethers } from "ethers";

const providerurl = `https://eth-sepolia.g.alchemy.com/v2/${process.env.ALCHEMY_KEY}`;
const provider = new ethers.JsonRpcProvider(providerurl);

const mainnetproviderurl = `https://eth-mainnet.g.alchemy.com/v2/${process.env.ALCHEMY_KEY}`;
const mainnetprovider = new ethers.JsonRpcProvider(mainnetproviderurl);

const wallet = new ethers.Wallet.createRandom();

console.log("address: " + wallet.address);
// console.log("private Key: " + wallet.privateKey);
// console.log("public Key: " + wallet.publicKey);
// console.log("mnemonic: " + wallet.mnemonic.phrase);

const signer = wallet.connect(provider);

// const signature = await wallet.signMessage("Hola!");
// console.log("Signed message " + signature);

// const signerAddress = ethers.verifyMessage("Hola!", signature);
// console.log("Signer address: " + signerAddress);

const balance = ethers.formatEther(
  await signer.provider.getBalance(signer.address)
);
console.log("Balance: " + balance);

const myAddress = await mainnetprovider.resolveName("bowtiefriday.eth");
console.log("my Address: " + myAddress);

console.log("Sending ETH to " + myAddress);

const tx = await signer.sendTransaction({
  to: myAddress,
  value: ethers.parseEther((balance * 0.1).toString()),
});

console.log("TX is mempool");

await tx.wait();

console.log("Tx is confirmed");
