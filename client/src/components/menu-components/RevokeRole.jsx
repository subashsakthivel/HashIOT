import React, { useState ,  useContext } from 'react';
import { TransactionContext } from '../../context/TransactionContext';
import { WEB3context } from '../../context/WEB3context';

function RemoveMember() {
  
  const ADMIN= '0xdf8b4c520ffe197c5343c6f5aec59570151ef9a492f2c624fd45ddde6135ec42';
  const USER = '0x2db9fd3d099848027c2383d0a083396f6c41510d7acfd92adc99b6cffcf31e96';
  const { connectedAccount} = useContext(TransactionContext);
  const { RevokeRoleTrans} = useContext(WEB3context); 
  const [formData , setFormData ] = useState({role:'',address:''});

  const handlechange = (e) => {
      const {name, value} = e.target;
      setFormData((prevState) => ({ ...prevState, [name]: value }));
  }

  const handleSubmit = (e) => {
    const {role,address}  = formData;
    e.preventDefault();

    if(!role || !address ) return;
    
    console.log(role, address , connectedAccount);
    RevokeRoleTrans(role, address , connectedAccount);
  }

 // handleForm({role:'',address:''});


  return (
    <div>
       <div className='add-member add-iot shadow'>
            <div className='add-mem-detail'>
                <label htmlFor='address'>Address</label><br></br>
                <input type={"text"} id={"address"} name="address" onChange={handlechange}/><br></br>
                <label>Remove as</label><br></br>
                <button className='btn1 role' name="role" onClick={handlechange} value={ADMIN}>Admin</button>
                <button className='btn2 role' name="role" onClick={handlechange} value={USER}>User</button>
            </div>
            <button className='btn-rm btn-intro btn-light' onClick={handleSubmit }>Remove Member</button>
        </div> 
    </div>
  )
}

export default RemoveMember