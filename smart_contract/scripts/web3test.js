abi = {
    "_format": "hh-sol-artifact-1",
    "contractName": "HashIOT",
    "sourceName": "contracts/HashIOT.sol",
    "abi": [
      {
        "anonymous": false,
        "inputs": [
          {
            "indexed": false,
            "internalType": "address",
            "name": "owner",
            "type": "address"
          },
          {
            "indexed": true,
            "internalType": "uint256",
            "name": "mac",
            "type": "uint256"
          },
          {
            "indexed": false,
            "internalType": "bool",
            "name": "state",
            "type": "bool"
          },
          {
            "indexed": false,
            "internalType": "bytes32",
            "name": "dataSet",
            "type": "bytes32"
          }
        ],
        "name": "LogNode",
        "type": "event"
      },
      {
        "inputs": [
          {
            "internalType": "uint256",
            "name": "_mac",
            "type": "uint256"
          },
          {
            "internalType": "string",
            "name": "_data",
            "type": "string"
          }
        ],
        "name": "ChangeData",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
      },
      {
        "inputs": [
          {
            "internalType": "uint256",
            "name": "_mac",
            "type": "uint256"
          },
          {
            "internalType": "uint256",
            "name": "_port",
            "type": "uint256"
          }
        ],
        "name": "ChangePort",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
      },
      {
        "inputs": [
          {
            "internalType": "uint256",
            "name": "_mac",
            "type": "uint256"
          }
        ],
        "name": "ChangeState",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
      },
      {
        "inputs": [
          {
            "internalType": "uint256",
            "name": "_mac",
            "type": "uint256"
          },
          {
            "internalType": "uint256",
            "name": "_port",
            "type": "uint256"
          },
          {
            "internalType": "string",
            "name": "_data",
            "type": "string"
          }
        ],
        "name": "RegisterNewNode",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
      },
      {
        "inputs": [
          {
            "internalType": "uint256",
            "name": "_mac",
            "type": "uint256"
          }
        ],
        "name": "RevokeNode",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
      },
      {
        "inputs": [],
        "name": "countOfTransaction",
        "outputs": [
          {
            "internalType": "uint256",
            "name": "",
            "type": "uint256"
          }
        ],
        "stateMutability": "view",
        "type": "function"
      },
      {
        "inputs": [
          {
            "internalType": "uint256",
            "name": "_mac",
            "type": "uint256"
          }
        ],
        "name": "getDetails",
        "outputs": [
          {
            "internalType": "uint256",
            "name": "",
            "type": "uint256"
          },
          {
            "internalType": "bool",
            "name": "",
            "type": "bool"
          },
          {
            "internalType": "address",
            "name": "",
            "type": "address"
          },
          {
            "internalType": "bytes32",
            "name": "",
            "type": "bytes32"
          }
        ],
        "stateMutability": "view",
        "type": "function"
      },
      {
        "inputs": [
          {
            "internalType": "uint256",
            "name": "",
            "type": "uint256"
          }
        ],
        "name": "nodes_mac",
        "outputs": [
          {
            "internalType": "uint256",
            "name": "port",
            "type": "uint256"
          },
          {
            "internalType": "bool",
            "name": "state",
            "type": "bool"
          },
          {
            "internalType": "address",
            "name": "owner",
            "type": "address"
          },
          {
            "internalType": "bytes32",
            "name": "dataSet",
            "type": "bytes32"
          },
          {
            "internalType": "uint256",
            "name": "transactionCount",
            "type": "uint256"
          }
        ],
        "stateMutability": "view",
        "type": "function"
      },
      {
        "inputs": [],
        "name": "transactionCount",
        "outputs": [
          {
            "internalType": "uint256",
            "name": "",
            "type": "uint256"
          }
        ],
        "stateMutability": "view",
        "type": "function"
      }
    ],
    "bytecode": "0x608060405234801561001057600080fd5b50610c98806100206000396000f3fe608060405234801561001057600080fd5b50600436106100935760003560e01c806399b0f9891161006657806399b0f9891461010a578063b77bf6001461013e578063b93a89f71461015c578063bff2785c1461018f578063e53a714b146101ab57610093565b80630469eefa1461009857806318e8c5cc146100b45780631ba6c3d8146100d25780634bb26ff8146100ee575b600080fd5b6100b260048036038101906100ad9190610840565b6101c7565b005b6100bc610338565b6040516100c991906109a8565b60405180910390f35b6100ec60048036038101906100e79190610804565b610341565b005b610108600480360381019061010391906107b0565b6103d5565b005b610124600480360381019061011f9190610787565b61048f565b604051610135959493929190610a08565b60405180910390f35b6101466104f2565b60405161015391906109a8565b60405180910390f35b61017660048036038101906101719190610787565b6104f8565b60405161018694939291906109c3565b60405180910390f35b6101a960048036038101906101a49190610787565b610596565b005b6101c560048036038101906101c09190610787565b610640565b005b60016000808282546101d99190610ad2565b925050819055506000816040516020016101f39190610923565b60405160208183030381529060405280519060200120905060006040518060a001604052808581526020016000151581526020013373ffffffffffffffffffffffffffffffffffffffff168152602001838152602001600054815250905080600160008781526020019081526020016000206000820151816000015560208201518160010160006101000a81548160ff02191690831515021790555060408201518160010160016101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055506060820151816002015560808201518160030155905050847f2def6cd14e35be5bfe69a53d55ee14390fea5067cd89013d3cf995466ddc73d582604001518360200151856040516103299392919061093a565b60405180910390a25050505050565b60008054905090565b806001600084815260200190815260200160002060000181905550817f2def6cd14e35be5bfe69a53d55ee14390fea5067cd89013d3cf995466ddc73d5336001600086815260200190815260200160002060010160009054906101000a900460ff1660016000878152602001908152602001600020600201546040516103c99392919061093a565b60405180910390a25050565b806040516020016103e69190610923565b604051602081830303815290604052805190602001206001600084815260200190815260200160002060020181905550817f2def6cd14e35be5bfe69a53d55ee14390fea5067cd89013d3cf995466ddc73d5336001600086815260200190815260200160002060010160009054906101000a900460ff1660016000878152602001908152602001600020600201546040516104839392919061093a565b60405180910390a25050565b60016020528060005260406000206000915090508060000154908060010160009054906101000a900460ff16908060010160019054906101000a900473ffffffffffffffffffffffffffffffffffffffff16908060020154908060030154905085565b60005481565b60008060008060016000868152602001908152602001600020600001546001600087815260200190815260200160002060010160009054906101000a900460ff166001600088815260200190815260200160002060010160019054906101000a900473ffffffffffffffffffffffffffffffffffffffff16600160008981526020019081526020016000206002015493509350935093509193509193565b807f2def6cd14e35be5bfe69a53d55ee14390fea5067cd89013d3cf995466ddc73d560008060006040516105cc93929190610971565b60405180910390a2600160008281526020019081526020016000206000808201600090556001820160006101000a81549060ff02191690556001820160016101000a81549073ffffffffffffffffffffffffffffffffffffffff021916905560028201600090556003820160009055505050565b6001600082815260200190815260200160002060010160009054906101000a900460ff16156001600083815260200190815260200160002060010160006101000a81548160ff021916908315150217905550807f2def6cd14e35be5bfe69a53d55ee14390fea5067cd89013d3cf995466ddc73d5336001600085815260200190815260200160002060010160009054906101000a900460ff1660016000868152602001908152602001600020600201546040516106ff9392919061093a565b60405180910390a250565b600061071d61071884610a8c565b610a5b565b90508281526020810184848401111561073557600080fd5b610740848285610b9e565b509392505050565b600082601f83011261075957600080fd5b813561076984826020860161070a565b91505092915050565b60008135905061078181610c4b565b92915050565b60006020828403121561079957600080fd5b60006107a784828501610772565b91505092915050565b600080604083850312156107c357600080fd5b60006107d185828601610772565b925050602083013567ffffffffffffffff8111156107ee57600080fd5b6107fa85828601610748565b9150509250929050565b6000806040838503121561081757600080fd5b600061082585828601610772565b925050602061083685828601610772565b9150509250929050565b60008060006060848603121561085557600080fd5b600061086386828701610772565b935050602061087486828701610772565b925050604084013567ffffffffffffffff81111561089157600080fd5b61089d86828701610748565b9150509250925092565b6108b081610b28565b82525050565b6108bf81610b3a565b82525050565b6108ce81610b46565b82525050565b6108dd81610b84565b82525050565b60006108ee82610abc565b6108f88185610ac7565b9350610908818560208601610bad565b80840191505092915050565b61091d81610b7a565b82525050565b600061092f82846108e3565b915081905092915050565b600060608201905061094f60008301866108a7565b61095c60208301856108b6565b61096960408301846108c5565b949350505050565b600060608201905061098660008301866108a7565b61099360208301856108b6565b6109a060408301846108d4565b949350505050565b60006020820190506109bd6000830184610914565b92915050565b60006080820190506109d86000830187610914565b6109e560208301866108b6565b6109f260408301856108a7565b6109ff60608301846108c5565b95945050505050565b600060a082019050610a1d6000830188610914565b610a2a60208301876108b6565b610a3760408301866108a7565b610a4460608301856108c5565b610a516080830184610914565b9695505050505050565b6000604051905081810181811067ffffffffffffffff82111715610a8257610a81610c0f565b5b8060405250919050565b600067ffffffffffffffff821115610aa757610aa6610c0f565b5b601f19601f8301169050602081019050919050565b600081519050919050565b600081905092915050565b6000610add82610b7a565b9150610ae883610b7a565b9250827fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff03821115610b1d57610b1c610be0565b5b828201905092915050565b6000610b3382610b5a565b9050919050565b60008115159050919050565b6000819050919050565b6000819050919050565b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b6000819050919050565b6000610b97610b9283610b50565b610c3e565b9050919050565b82818337600083830152505050565b60005b83811015610bcb578082015181840152602081019050610bb0565b83811115610bda576000848401525b50505050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b60008160001b9050919050565b610c5481610b7a565b8114610c5f57600080fd5b5056fea2646970667358221220d062169801915bcc893795b9f4304041eb17e0cf9fb80d210adc7e37ff0c6c3d64736f6c63430008000033",
    "deployedBytecode": "0x608060405234801561001057600080fd5b50600436106100935760003560e01c806399b0f9891161006657806399b0f9891461010a578063b77bf6001461013e578063b93a89f71461015c578063bff2785c1461018f578063e53a714b146101ab57610093565b80630469eefa1461009857806318e8c5cc146100b45780631ba6c3d8146100d25780634bb26ff8146100ee575b600080fd5b6100b260048036038101906100ad9190610840565b6101c7565b005b6100bc610338565b6040516100c991906109a8565b60405180910390f35b6100ec60048036038101906100e79190610804565b610341565b005b610108600480360381019061010391906107b0565b6103d5565b005b610124600480360381019061011f9190610787565b61048f565b604051610135959493929190610a08565b60405180910390f35b6101466104f2565b60405161015391906109a8565b60405180910390f35b61017660048036038101906101719190610787565b6104f8565b60405161018694939291906109c3565b60405180910390f35b6101a960048036038101906101a49190610787565b610596565b005b6101c560048036038101906101c09190610787565b610640565b005b60016000808282546101d99190610ad2565b925050819055506000816040516020016101f39190610923565b60405160208183030381529060405280519060200120905060006040518060a001604052808581526020016000151581526020013373ffffffffffffffffffffffffffffffffffffffff168152602001838152602001600054815250905080600160008781526020019081526020016000206000820151816000015560208201518160010160006101000a81548160ff02191690831515021790555060408201518160010160016101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055506060820151816002015560808201518160030155905050847f2def6cd14e35be5bfe69a53d55ee14390fea5067cd89013d3cf995466ddc73d582604001518360200151856040516103299392919061093a565b60405180910390a25050505050565b60008054905090565b806001600084815260200190815260200160002060000181905550817f2def6cd14e35be5bfe69a53d55ee14390fea5067cd89013d3cf995466ddc73d5336001600086815260200190815260200160002060010160009054906101000a900460ff1660016000878152602001908152602001600020600201546040516103c99392919061093a565b60405180910390a25050565b806040516020016103e69190610923565b604051602081830303815290604052805190602001206001600084815260200190815260200160002060020181905550817f2def6cd14e35be5bfe69a53d55ee14390fea5067cd89013d3cf995466ddc73d5336001600086815260200190815260200160002060010160009054906101000a900460ff1660016000878152602001908152602001600020600201546040516104839392919061093a565b60405180910390a25050565b60016020528060005260406000206000915090508060000154908060010160009054906101000a900460ff16908060010160019054906101000a900473ffffffffffffffffffffffffffffffffffffffff16908060020154908060030154905085565b60005481565b60008060008060016000868152602001908152602001600020600001546001600087815260200190815260200160002060010160009054906101000a900460ff166001600088815260200190815260200160002060010160019054906101000a900473ffffffffffffffffffffffffffffffffffffffff16600160008981526020019081526020016000206002015493509350935093509193509193565b807f2def6cd14e35be5bfe69a53d55ee14390fea5067cd89013d3cf995466ddc73d560008060006040516105cc93929190610971565b60405180910390a2600160008281526020019081526020016000206000808201600090556001820160006101000a81549060ff02191690556001820160016101000a81549073ffffffffffffffffffffffffffffffffffffffff021916905560028201600090556003820160009055505050565b6001600082815260200190815260200160002060010160009054906101000a900460ff16156001600083815260200190815260200160002060010160006101000a81548160ff021916908315150217905550807f2def6cd14e35be5bfe69a53d55ee14390fea5067cd89013d3cf995466ddc73d5336001600085815260200190815260200160002060010160009054906101000a900460ff1660016000868152602001908152602001600020600201546040516106ff9392919061093a565b60405180910390a250565b600061071d61071884610a8c565b610a5b565b90508281526020810184848401111561073557600080fd5b610740848285610b9e565b509392505050565b600082601f83011261075957600080fd5b813561076984826020860161070a565b91505092915050565b60008135905061078181610c4b565b92915050565b60006020828403121561079957600080fd5b60006107a784828501610772565b91505092915050565b600080604083850312156107c357600080fd5b60006107d185828601610772565b925050602083013567ffffffffffffffff8111156107ee57600080fd5b6107fa85828601610748565b9150509250929050565b6000806040838503121561081757600080fd5b600061082585828601610772565b925050602061083685828601610772565b9150509250929050565b60008060006060848603121561085557600080fd5b600061086386828701610772565b935050602061087486828701610772565b925050604084013567ffffffffffffffff81111561089157600080fd5b61089d86828701610748565b9150509250925092565b6108b081610b28565b82525050565b6108bf81610b3a565b82525050565b6108ce81610b46565b82525050565b6108dd81610b84565b82525050565b60006108ee82610abc565b6108f88185610ac7565b9350610908818560208601610bad565b80840191505092915050565b61091d81610b7a565b82525050565b600061092f82846108e3565b915081905092915050565b600060608201905061094f60008301866108a7565b61095c60208301856108b6565b61096960408301846108c5565b949350505050565b600060608201905061098660008301866108a7565b61099360208301856108b6565b6109a060408301846108d4565b949350505050565b60006020820190506109bd6000830184610914565b92915050565b60006080820190506109d86000830187610914565b6109e560208301866108b6565b6109f260408301856108a7565b6109ff60608301846108c5565b95945050505050565b600060a082019050610a1d6000830188610914565b610a2a60208301876108b6565b610a3760408301866108a7565b610a4460608301856108c5565b610a516080830184610914565b9695505050505050565b6000604051905081810181811067ffffffffffffffff82111715610a8257610a81610c0f565b5b8060405250919050565b600067ffffffffffffffff821115610aa757610aa6610c0f565b5b601f19601f8301169050602081019050919050565b600081519050919050565b600081905092915050565b6000610add82610b7a565b9150610ae883610b7a565b9250827fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff03821115610b1d57610b1c610be0565b5b828201905092915050565b6000610b3382610b5a565b9050919050565b60008115159050919050565b6000819050919050565b6000819050919050565b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b6000819050919050565b6000610b97610b9283610b50565b610c3e565b9050919050565b82818337600083830152505050565b60005b83811015610bcb578082015181840152602081019050610bb0565b83811115610bda576000848401525b50505050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b60008160001b9050919050565b610c5481610b7a565b8114610c5f57600080fd5b5056fea2646970667358221220d062169801915bcc893795b9f4304041eb17e0cf9fb80d210adc7e37ff0c6c3d64736f6c63430008000033",
    "linkReferences": {},
    "deployedLinkReferences": {}
  };
  

const Web3 = require('web3')
const web3 = new Web3("http://localhost:8545")
const getAccounts = async () => {
    const ganacheAccounts = await web3.eth.getAccounts();
    const myWalletAddress = ganacheAccounts[0];
    console.log(myWalletAddress);
    address = '0x5FbDB2315678afecb367f032d93F642f64180aa3';
    web3.eth.getBalance(myWalletAddress)
    .then(console.log);
    //web3.eth.requestAccounts().then(console.log);
    abi = abi.abi;
    const Contract = new web3.eth.Contract(abi, address);
    Contract.methods.getDetails(890).call()
    .then(console.log);
    // var batch = new web3.BatchRequest();
    // batch.add(web3.eth.getBalance.request('0x0000000000000000000000000000000000000000', 'latest', callback));
    // batch.add(contract.methods.balance(address).call.request({from: '0x0000000000000000000000000000000000000000'}, callback2));
    // batch.execute();
    // web3.eth.getBalance()
    // web3.eth.getCode()
    // web3.eth.getTransactionCount()
    // web3.eth.getStorageAt()
    // web3.eth.call()
    // new web3.eth.Contract() -> myContract.methods.myMethod().call()


}

getAccounts();