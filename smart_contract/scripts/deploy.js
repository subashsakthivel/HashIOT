
const hre = require("hardhat");

const main = async () => {

  const IOTcontract = await hre.ethers.getContractFactory("IOTcontract");
  const IOTCONTRACT = await IOTcontract.deploy();

  await IOTCONTRACT.deployed();

  console.log("IOTCONTRACT deployed to:", IOTCONTRACT.address);
}
 
const runMain = async () => {
  try {
    await main();
    process.exit(0);
  }
  catch(error) {
    console.error(error.message);
    process.exit(1);
  }
}

runMain();
