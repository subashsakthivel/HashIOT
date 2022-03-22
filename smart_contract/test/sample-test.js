const { expect } = require("chai");
const { ethers } = require("hardhat");

describe("IOTcontract", function () {
  it("Should return change", async function () {
    const IOTcontract = await ethers.getContractFactory("IOTcontract");
    const IOTCONTRACTDeployed = await IOTcontract.deploy();
    
    await IOTCONTRACTDeployed.deployed();

  //  expect(await IOTCONTRACTDeployed.countOfTransaction()).to.equal(0);
    console.log(IOTCONTRACTDeployed);
  });
});