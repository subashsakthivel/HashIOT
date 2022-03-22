// https://eth-ropsten.alchemyapi.io/v2/ldoPDEPjKgA5kG974N_KOHb4hvsH71kl

require('@nomiclabs/hardhat-waffle');
require("@nomiclabs/hardhat-ethers");

module.exports = {
  solidity : '0.8.0',
  networks: {
    localhost: {
      url: "http://127.0.0.1:8545"
    },
    hardhat: {
      chainId: 1337
    }
  },
}