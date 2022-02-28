
const hre = require("hardhat");

const main = async () => {

  const HashIOT = await hre.ethers.getContractFactory("HashIOT");
  const hashIOT = await HashIOT.deploy();

  await hashIOT.deployed();

  console.log("HashIOT deployed to:", hashIOT.address);
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
