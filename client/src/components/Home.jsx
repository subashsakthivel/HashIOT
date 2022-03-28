import React, { useContext } from 'react';
import Remote from "./Remote";
import { TransactionContext } from '../context/TransactionContext';
import { WEB3context } from '../context/WEB3context';


function Home() {
    const { connectToWallet, connectedAccount } = useContext(TransactionContext);
    const {  IOTDevices , Devices, web3 } = useContext(WEB3context);
    

    const Dev = Devices.map((d,index) => 
        <Remote key={index} name={web3.utils.hexToString(d.name)} mac={d.mac} index={index}/>
    )

    //Index set and increment
    
    return (
        <>
        <div className="home">
            {!connectedAccount ? <button onClick={ connectToWallet } className="connect-wallet">connect to Wallet</button> :
            <>
                <button onClick={IOTDevices}>refresh</button>
                <h4>Conneceted Account : {`${connectedAccount}`}</h4>
                <section>
                    {Dev}
                </section>
               
            </>
            }
        </div>
        </>
    )
}

export default Home;