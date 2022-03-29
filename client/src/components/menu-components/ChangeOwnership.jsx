import React ,{useState,  useContext } from 'react';
import { WEB3context } from '../../context/WEB3context';
import { TransactionContext } from '../../context/TransactionContext';


function ChangeOwnership() {

  const {connectedAccount } = useContext(TransactionContext);
  const { ChangeOwnerShipTrans} = useContext(WEB3context);
  const [formData , setFormData ] = useState({address:''});

  const handlechange = (e) => {
      const {name, value} = e.target;
      setFormData((prevState) => ({ ...prevState, [name]: value }));
  }

  const handleSubmit = (e) => {
    const {address}  = formData;
    e.preventDefault();

    if(!address ) return;
    
    console.log(address);
    ChangeOwnerShipTrans(address , connectedAccount);
  }

  
  // handleForm({address:''}); //this wrong i think;


  return (
      <div className='centering '>
        <div className='add-member add-iot shadow'>
            <div className='add-mem-detail'>
            <label htmlFor='address'>Next Owner Address</label>
            <input type={"text"} id={"address"} name="address" onChange={handlechange}/><br></br>
            </div>
            <button className=' fi btn-rm btn-intro btn-light' onClick={handleSubmit}>Change Ownership</button>
        </div>
      </div>
  )
}

export default ChangeOwnership