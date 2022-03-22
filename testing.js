const Web3 = require('web3');
const web3 = new Web3("http://localhost:8545");
const res = web3.eth.abi.encodeParameters(['string'], ['ADMIN']);
console.log(res);
console.log(res==='0xdf8b4c520ffe197c5343c6f5aec59570151ef9a492f2c624fd45ddde6135ec42');

