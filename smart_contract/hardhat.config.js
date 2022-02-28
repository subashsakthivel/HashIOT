// https://eth-ropsten.alchemyapi.io/v2/ldoPDEPjKgA5kG974N_KOHb4hvsH71kl

require('@nomiclabs/hardhat-waffle');

module.exports = {
  solidity : '0.8.0',
  networks: {
    ropsten: {
      url : 'https://eth-ropsten.alchemyapi.io/v2/ldoPDEPjKgA5kG974N_KOHb4hvsH71kl',
      accounts: [ '3754c6684721a7a4e0440b005b4d99189d9fe5dea1aaa46db22cc1af7223f8d4' ]
    }
  }
}