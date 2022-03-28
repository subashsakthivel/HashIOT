import React, { useState,  useContext } from 'react';
import { TransactionContext } from '../../context/TransactionContext';
import { WEB3context } from '../../context/WEB3context';


function RegisterIOT() {
  const {connectedAccount} = useContext(TransactionContext);
  const { RegisterIOTTrans } = useContext(WEB3context);
  const [formData , setFormData ] = useState({name:'',mac:'',port:0,deviceAddress:''});

  const handlechange = (e) => {
      const {name, value} = e.target;
      setFormData((prevState) => ({ ...prevState, [name]: value }));
  }
  
  const handleSubmit = (e) => {
    const {name ,mac, port , deviceAddress}  = formData;
    e.preventDefault();

    if(!name || !mac || !port || !deviceAddress) return;

    console.log(name ,mac, port , deviceAddress);
    RegisterIOTTrans(name ,mac, port , deviceAddress, connectedAccount);
  }

  //handleForm({name:'',mac:'',port:0,deviceAddress:''});

  return (
      <div className='add-iot-com'>
        <div className='add-iot'>
            <label htmlFor='name'>Name</label>
            <input type={"text"} id={"name"} name="name" onChange={handlechange}/><br></br>
            <label htmlFor='mac'>Mac</label>
            <input type={"text"} id={"mac"} name="mac" onChange={handlechange}/><br></br>
            <label htmlFor='port'>Port</label>
            <input type={"number"} id={"port"} name="port" onChange={handlechange}/><br></br>
            <label htmlFor='deviceAddress'>Device Address</label>
            <input type={"address"} id={"deviceAddress"} name="deviceAddress" onChange={handlechange}/><br></br>
        </div>
        <button className='btn-intro' type='button' onClick={handleSubmit}>Introduce</button>
      </div>
    
  )
}

export default RegisterIOT
