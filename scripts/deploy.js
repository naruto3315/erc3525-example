// We require the Hardhat Runtime Environment explicitly here. This is optional
// but useful for running the script in a standalone fashion through `node <script>`.
//
// You can also run a script with `npx hardhat run <script>`. If you do that, Hardhat
// will compile your contracts, add the Hardhat Runtime Environment's members to the
// global scope, and execute the script.
const hre = require("hardhat");

async function main() {
  const [deployer] = await ethers.getSigners();
  console.log("Deploying contracts with the account: " + deployer.address);

  const MyERC3525 = await hre.ethers.getContractFactory("MyERC3525");
  const myERC3525 = await MyERC3525.deploy();

  await myERC3525.deployed();
  console.log(`MyERC3525 deployed to ${myERC3525.address}`);
  // 

  const valueDecimals = await myERC3525.valueDecimals();
  await myERC3525.mint(deployer.address, 1, 1, valueDecimals * 10);
  console.log(`Mint successfully!`);
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
