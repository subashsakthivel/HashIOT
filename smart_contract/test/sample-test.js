const { expect } = require("chai");
const { ethers } = require("hardhat");

describe("HashIOT", function () {
  it("Should return the new greeting once it's changed", async function () {
    const HashIOT = await ethers.getContractFactory("HashIOT");
    const hashIOT = await HashIOT.deploy();
    await hashIOT.deployed();

    expect(await hashIOT.greet()).to.equal();

    const setGreetingTx = await hashIOT.setGreeting("Hola, mundo!");

    // wait until the transaction is mined
    await setGreetingTx.wait();

    expect(await hashIOT.greet()).to.equal("Hola, mundo!");
  });
});
