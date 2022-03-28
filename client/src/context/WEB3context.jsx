import React,{ useState , useEffect , createContext ,useContext} from 'react';
import { accessABI  , iotABI, accesContractAddress, iotContractAddress } from '../utils/Wallet';
import { TransactionContext } from './TransactionContext';
const Web3 = require('web3');
const web3 = new Web3("http://localhost:8545");

export const WEB3context = createContext({});


export const WEB3Provider = ({ children }) => {

    const { connectedAccount } = useContext(TransactionContext);
    const [currentAccount, setcurrentAccount] = useState(connectedAccount);
    const [accessControlContractInstance, setAccessControlContractInstance] = useState();
    const [iotashContractInstance, setIOTashContractInstance] = useState();
    const [Devices , setDevices] = useState([]);

    const hash = async() => {
        const ganacheAccounts = await web3.eth.getAccounts();
        const myWalletAddress = ganacheAccounts[1];
        console.log("Account :  ", myWalletAddress);
        setcurrentAccount(myWalletAddress);
        const AccessControl_contract = new web3.eth.Contract(accessABI, accesContractAddress,{
            from: myWalletAddress, 
            gas: 1500000,
            gasPrice: '30000000000'
        });
        const IOTash_contract = new web3.eth.Contract(iotABI, iotContractAddress,{
            from: myWalletAddress ,
            gas: 1500000,
            gasPrice: '30000000000'
        });
        AccessControl_contract.defaultHardfork = 'MUIRGLACIER';
        IOTash_contract.defaultHardfork = 'MUIRGLACIER';
        
        console.log("Access Control contract Options: ",AccessControl_contract.options);
        console.log("IOTash contract Options: ",IOTash_contract.options);
        
        const balance = await web3.eth.getBalance(myWalletAddress);
        console.log(balance);

        setAccessControlContractInstance(AccessControl_contract);
        setIOTashContractInstance(IOTash_contract)
    }
    
    const checkAccessAbility = async (role, address,index) => {
        await accessControlContractInstance.methods.roles(role , address).call()
        .then(function(result) 
        {
            console.log(result);
            if(!result)
            console.log("sorry bro");
            else
            console.log("You are bro");
        });
        await iotashContractInstance.methods.IOTaccess(address, index).call()
        .then(function(result) 
        {
            console.log(result);
            // if(!result)
            // console.log("sorry bro");
            // else
            // console.log("You are bro");
        });
    }

    const RegisterIOTTrans = async (name ,mac, port , deviceAddress, connectedAccount) => {
        // const permit = checkAccessAbility(role , connectedAccount);
        // console.log("Permit: ", permit);
        // if(!permit) return;
        const Name =  web3.utils.asciiToHex(name);
        const Mac =  web3.utils.asciiToHex(mac);
        await iotashContractInstance.methods.RegisterDevice(Name, Mac, port, deviceAddress).send({from:currentAccount})
        .on('transactionHash', function(hash){
            console.log("Transaction Hash : ", hash);
        })
        .on('receipt', function(receipt){
            console.log("Receipt : ", receipt);
        })
        .on('confirmation', function(confirmationNumber, receipt){
            console.log("Confirmation : ", confirmationNumber);
        })
        .on('error', function(error, receipt) {
            if(error)
            console.error(error);
        });
    }

    const GrantRoleTrans = async (role, address , connectedAccount) => {
        await accessControlContractInstance.methods.grantRole(role , address).send({from: connectedAccount })
        .on('transactionHash', function(hash){
            console.log("Transaction Hash : ", hash);
        })
        .on('receipt', function(receipt){
            console.log("Receipt : ", receipt);
        })
        .on('confirmation', function(confirmationNumber, receipt){
            console.log("Confirmation : ", confirmationNumber);
        })
        .on('error', function(error, receipt) {
            if(error)
            console.error(error);
        });
    }

    const RevokeRoleTrans = async (role, address) => {
        await accessControlContractInstance.methods.revokeRole(role , address).send({from: currentAccount })
        .on('transactionHash', function(hash){
            console.log("Transaction Hash : ", hash);
        })
        .on('receipt', function(receipt){
            console.log("Receipt : ", receipt);
        })
        .on('confirmation', function(confirmationNumber, receipt){
            console.log("Confirmation : ", confirmationNumber);
        })
        .on('error', function(error, receipt) {
            if(error)
            console.error(error);
        });
    }

    const RemoveIOTTrans = async (index, connectedAccount) => {
        // const permit = checkAccessAbility(role , connectedAccount);
        // if(!permit) return;
        await iotashContractInstance.methods.RevokeDevice(index).send({from: connectedAccount })
        .on('transactionHash', function(hash){
            console.log("Transaction Hash : ", hash);
        })
        .on('receipt', function(receipt){
            console.log("Receipt : ", receipt);
        })
        .on('confirmation', function(confirmationNumber, receipt){
            console.log("Confirmation : ", confirmationNumber);
        })
        .on('error', function(error, receipt) {
            if(error)
            console.error(error);
        });
    }

    const IOTDevices = async () => {
        await iotashContractInstance.methods.getIOTs().call()
        .then(function(result){
            console.log(result);
            setDevices(result);
            console.log(Devices);
        });
    }

    const ChangeOwnerShipTrans = async (address , connectedAccount) => {
        await iotashContractInstance.methods.changeOwnership(address).send({from: connectedAccount})
        .on('transactionHash', function(hash){
            console.log("Transaction Hash : ", hash);
        })
        .on('receipt', function(receipt){
            console.log("Receipt : ", receipt);
        })
        .on('confirmation', function(confirmationNumber, receipt){
            console.log("Confirmation : ", confirmationNumber);
        })
        .on('error', function(error, receipt) {
            if(error)
            console.error(error);
        });
    }

   // IOTDevices();

    useEffect(() => {
        hash();
    },[]);

    return (
        <WEB3context.Provider value={{ web3, IOTDevices, ChangeOwnerShipTrans, checkAccessAbility , currentAccount ,RegisterIOTTrans,GrantRoleTrans, RevokeRoleTrans, RemoveIOTTrans, Devices }}>
            {children}
        </WEB3context.Provider>
    );
}
