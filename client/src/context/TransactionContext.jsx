import React,{ useState , useEffect , createContext} from 'react';
//import { ethers } from 'ethers';
//import { contractABI , contractAddress } from '../utils/Wallet';

export const TransactionContext = createContext({});

const { ethereum } = window;

// const getEthereumContract = () => {
//     const provider  = new ethers.providers.Web3Provider(ethereum);
//     const signer = provider.getSigner();
//     const transactionContract = new ethers.Contract(contractAddress , contractABI , signer);
//     return transactionContract;
// }

export const TransactionProvider = ({ children }) => {

    const [connectedAccount , setConnectedAccount ] = useState('')
    const [formData , setFormData ] = useState({});
    const ADMIN= '0xdf8b4c520ffe197c5343c6f5aec59570151ef9a492f2c624fd45ddde6135ec42';
    const USER = '0x2db9fd3d099848027c2383d0a083396f6c41510d7acfd92adc99b6cffcf31e96';
    //  const [isLoding, setisLoding] = useState(false);
    //  const [currentMac, setCurrentMac] = useState('');

    const handlechange = (e) => {
        const {name, value} = e.target;
        setFormData((prevState) => ({ ...prevState, [name]: value }));
    }

    const handleForm = (data) => {
        setFormData(data);
    }

    const checkIfWalletIsConnected = async () => {
        try {
            if(!ethereum) return alert("Install metamask");

            const accounts = await ethereum.request({ method: 'eth_accounts'})

            if(accounts.length)
            {
                setConnectedAccount(accounts[0]);
            } else {
                console.log("No accounts found");
            }
        }
        catch {
            console.error();

            throw new Error("No ethereum object.");
        }
    }

    const connectToWallet = async () => {
        try {
            if(!ethereum) return alert("Install metamask");

            const accounts = await ethereum.request({ method: 'eth_requestAccounts'});
            setConnectedAccount(accounts[0]);
        }
        catch (error) {
            console.error();

            throw new Error("No ethereum object.");
        }
    }

    // const sendTransaction = async () => {
    //     try {
    //         if(!ethereum) return alert("Install metamask");

    //         const {mac}  = formData;
    //         console.log("sendTranction", mac);
    //         const transactionContract = getEthereumContract();
    //         console.log(transactionContract);
            
    //         await ethereum.request({
    //             method: 'eth_sendTransaction',
    //             params : [{
    //                 from: connectedAccount,
    //                 gas: '0x5208', //21000gwei
    //                 value: 0x0, 
    //                 data: '0xd46e8dd67c5d32be8d46e8dd67c5d32be8058bb8eb970870f072445675058bb8eb970870f072445675',
    //             },]
    //         });

    //         const transactionHash = await transactionContract.RegisterNewNode(mac);

    //         setisLoding(true);
    //         console.log(`Loding - ${transactionHash.hash}`);
    //         await transactionHash.wait();
    //         setisLoding(false);
    //         console.log(`Success - ${transactionHash.hash}`);

    //         const transactionCount = await transactionContract.getTransactionCount();
    //         console.log(transactionCount);
    //     }
    //     catch (error) {
    //         console.error();

    //         throw new Error("No ethereum object.");
    //     }
    // }
    // const sendtransaction = async () => {
    //     try {
    //         if(!ethereum) return alert("Install metamask");

    //         const transactionContract = getEthereumContract();
    //         console.log(transactionContract);
            
    //         await ethereum.request({
    //             method: 'eth_sendTransaction',
    //             params : [{
    //                 from: connectedAccount,
    //                 gas: '0x5208', //21000gwei
    //                 value: 0x0, 
    //                 data: '0xd46e8dd67c5d32be8d46e8dd67c5d32be8058bb8eb970870f072445675058bb8eb970870f072445675',
    //             },]
    //         });

    //         const transactionHash = await transactionContract.ChangeState(currentMac);

    //         setisLoding(true);
    //         console.log(`Loding - ${transactionHash.hash}`);
    //         await transactionHash.wait();
    //         setisLoding(false);
    //         console.log(`Success - ${transactionHash.hash}`);

    //         const transactionCount = await transactionContract.getTransactionCount();
    //         console.log(transactionCount);
    //     }
    //     catch (error) {
    //         console.error();

    //         throw new Error("No ethereum object.");
    //     }
    // }
    useEffect(() => {
        checkIfWalletIsConnected();
    },[]);

    return (
        <TransactionContext.Provider value={{ ADMIN , USER, connectToWallet , connectedAccount, formData , handleForm, setFormData , handlechange}}>
            { children }
        </TransactionContext.Provider>
    )
}
