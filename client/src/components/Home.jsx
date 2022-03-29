import React, { useContext } from 'react';
import Remote from "./Remote";
import { TransactionContext } from '../context/TransactionContext';
import { WEB3context } from '../context/WEB3context';


function Home() {
    const { connectToWallet, connectedAccount } = useContext(TransactionContext);
    const {   Devices, web3 } = useContext(WEB3context);
    

    const Dev = Devices.map((d,index) => 
        <Remote key={index} visible={false} name={web3.utils.hexToString(d.name)} mac={d.mac} index={index}/>
    )

    //Index set and increment
    
    return (
        <>
        <div className="home">
            {!connectedAccount ? <button onClick={ connectToWallet } className="connect-wallet">connect to Wallet</button> :
            <>
                <h4 className='account'>Conneceted Account : {`${connectedAccount.substring(0,5)}. . .${connectedAccount.substring(37)}`}</h4>
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