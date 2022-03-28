import { useContext } from "react";
import {WEB3context} from '../context/WEB3context'; 

export const hash = async () => {
    const {iotashContractInstance} = useContext(WEB3context);
    await iotashContractInstance.methode.getIOTs().call()
    .then(function(error , result ){
        if(error)
        {
            console.error(error);
            return;
        }
        return result;
    })
}