import pkg from "hardhat";
const { ethers } = pkg;

async function main() {
  const Token = await ethers.getContractFactory("BasedBaseToken");
  const token = await Token.deploy();
  await token.waitForDeployment();

  console.log("BasedBaseToken deployed to:", await token.getAddress());
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
