const contractABI = [
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
          "internalType": "string",
          "name": "_mac",
          "type": "string"
        }
      ],
      "name": "Permission_Check",
      "outputs": [
        {
          "internalType": "bool",
          "name": "",
          "type": "bool"
        },
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

const contractAddress = '0x5FbDB2315678afecb367f032d93F642f64180aa3';
const Web3 = require('web3');
const web3 = new Web3("http://localhost:8545");
const private = '703a21022b447397f515a9a48a2af4a1bcb881abe4cbb8e7e4bf445501299e91';

const getEther = async() => {

    const ganacheAccounts = await web3.eth.getAccounts();
    const myWalletAddress = ganacheAccounts[0];
    console.log(myWalletAddress);
    const networkId = await web3.eth.net.getId();
    console.log(networkId);
    const contract = new web3.eth.Contract(contractABI, contractAddress,{
      from: '0x09612Fb84474F8b4A30EccD1808cacE12E07F3E6', 
  });
    contract.defaultHardfork = 'MUIRGLACIER';
    console.log(contract.options);
    const balance = await web3.eth.getBalance(myWalletAddress);
    console.log(balance);

    // const gas = await contract.methods.Permission_Check("111:000:323").estimateGas({from : myWalletAddress , gasPrice:50000000}, function(error, gasAmount){
    //   if(gasAmount >= 5000000)
    //       console.log('Method ran out of gas');
    // })

    // contract.options.gas = gas;
    // const gasPrice = await web3.eth.getGasPrice();
    // contract.options.gasPrice = gasPrice;

    const tx = contract.methods.Permission_Check("111:000:323").call({from : myWalletAddress})
    console.log(tx)
    // .on('transactionHash', function(hash){
    //     console.log('hash : ',hash);
    // })
    // .on('receipt', function(receipt){
    //   console.log('receipt : ', receipt)
    // })
    // .on('error', function(error, receipt) {
    //     console.log(error)
    //     console.log('result :: ', receipt);
    // });

    
    // const data = tx.encodeABI();
    // const nonce = await web3.eth.getTransactionCount(myWalletAddress);

    // console.log(contract.options);
    // console.log('rjadkaak', await tx);
}

const checkAccessAbility = async (mac) => {
    try {
        const transHash = await contract.methods.Permission_Check("90q").send({
            from: account
        })
        .then(console.log); 
        return transHash;
    }
    catch(error){
        console.error(error);
        console.log("SOmethong jn");
        return;
    }
}

const RegisterTrans = async (mac,account) => {
    await contract.methods.RegisterRole(mac).send({
        from: account
    })
    .then(console.log);
}

const GrantRoleTrans = async (role, address ,mac , account) => {
    await contract.methods.grantRole(role,address,mac).send({
        from: account
    })
    .then(console.log);
}
const RevokeRoleTrans = async (role, address ,mac,account) => {
    await contract.methods.revokeRole(role,address,mac).send({
        from:account
    })
    .then(console.log);
}

getEther();