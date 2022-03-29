import React, { useContext } from 'react';
import Remote from "../Remote";
import { WEB3context } from '../../context/WEB3context';


function RemoveIOT() {
    //const { connectToWallet, connectedAccount } = useContext(TransactionContext);
    const {   Devices, web3 } = useContext(WEB3context);
    

    const Dev = Devices.map((d,index) => 
        <Remote key={index} visible={true} name={web3.utils.hexToString(d.name)} mac={d.mac} index={index}/>
    )

    //Index set and increment
    
    return (
        <>
        <div className="home">
            <section>
                {Dev}
            </section>
        </div>
        </>
    )
}

export default RemoveIOT;