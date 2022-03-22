const abi = [
    {
        "anonymous": false,
        "inputs": [
            {
                "indexed": true,
                "internalType": "bytes32",
                "name": "role",
                "type": "bytes32"
            },
            {
                "indexed": true,
                "internalType": "address",
                "name": "account",
                "type": "address"
            },
            {
                "indexed": false,
                "internalType": "bytes32",
                "name": "hash",
                "type": "bytes32"
            }
        ],
        "name": "GrantRole",
        "type": "event"
    },
    {
        "anonymous": false,
        "inputs": [
            {
                "indexed": true,
                "internalType": "bytes32",
                "name": "role",
                "type": "bytes32"
            },
            {
                "indexed": true,
                "internalType": "address",
                "name": "account",
                "type": "address"
            }
        ],
        "name": "RevokeRole",
        "type": "event"
    },
    {
        "inputs": [
            {
                "internalType": "bytes32",
                "name": "_role",
                "type": "bytes32"
            },
            {
                "internalType": "bytes32",
                "name": "_iot_hash",
                "type": "bytes32"
            }
        ],
        "name": "Permission_Check",
        "outputs": [
            {
                "internalType": "bool",
                "name": "",
                "type": "bool"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "string",
                "name": "_mac",
                "type": "string"
            }
        ],
        "name": "RegisterRole",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "address",
                "name": "_account",
                "type": "address"
            },
            {
                "internalType": "string",
                "name": "_mac",
                "type": "string"
            }
        ],
        "name": "_hash",
        "outputs": [
            {
                "internalType": "bytes32",
                "name": "",
                "type": "bytes32"
            }
        ],
        "stateMutability": "pure",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "getname",
        "outputs": [
            {
                "internalType": "string",
                "name": "",
                "type": "string"
            }
        ],
        "stateMutability": "pure",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "bytes32",
                "name": "_role",
                "type": "bytes32"
            },
            {
                "internalType": "address",
                "name": "_account",
                "type": "address"
            },
            {
                "internalType": "string",
                "name": "_mac",
                "type": "string"
            }
        ],
        "name": "grantRole",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "bytes32",
                "name": "_role",
                "type": "bytes32"
            },
            {
                "internalType": "address",
                "name": "_account",
                "type": "address"
            },
            {
                "internalType": "string",
                "name": "_mac",
                "type": "string"
            }
        ],
        "name": "revokeRole",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "bytes32",
                "name": "",
                "type": "bytes32"
            },
            {
                "internalType": "bytes32",
                "name": "",
                "type": "bytes32"
            }
        ],
        "name": "roles",
        "outputs": [
            {
                "internalType": "bool",
                "name": "",
                "type": "bool"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    }
]

const hash =  async() => {
    const contractABI = abi;
    const contractAddress = '0x0DBfee1e0236a2A43D3C77A59Cf5bB0E03b3a0b2';
    const Web3 = require('web3');
    const web3 = new Web3("http://localhost:8545");
    const ganacheAccounts = await web3.eth.getAccounts();
    const myWalletAddress = ganacheAccounts[0];
    console.log("Account :  ", myWalletAddress);
    const contract = new web3.eth.Contract(contractABI, contractAddress,{
        from: '0x09612Fb84474F8b4A30EccD1808cacE12E07F3E6', 
        gas: 1500000,
        gasPrice: '30000000000'
    });
    contract.defaultHardfork = 'MUIRGLACIER';
    console.log("contract Options: ",contract.options);
    const balance = await web3.eth.getBalance(myWalletAddress);
    console.log(balance);

    await contract.methods.Permission_Check('0xdf8b4c520ffe197c5343c6f5aec59570151ef9a492f2c624fd45ddde6135ec42','0x044dcd5d086548c7c0c94f1eb28bf6a8ef137b362ed9ba95c0dbdf2889330fd6').call()
    .then(function(result)
    {
        console.log("result :", result);
    });
}
//0x044dcd5d086548c7c0c94f1eb28bf6a8ef137b362ed9ba95c0dbdf2889330fd6
//0x8fa327754d8ba85a07124719b4690eb2d971d91b2f8ca85bf3855d7809a550e1
//0xdf8b4c520ffe197c5343c6f5aec59570151ef9a492f2c624fd45ddde6135ec42
hash();