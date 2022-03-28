import React , {useContext} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons';
import { WEB3context } from '../context/WEB3context';
import { TransactionContext } from '../context/TransactionContext';



export default function Remote(props) {
  const { checkAccessAbility,RemoveIOTTrans} = useContext(WEB3context); 
  const { connectedAccount , ADMIN} = useContext(TransactionContext); 

  const iotSwitch = (e) => {
    console.log(e.target.value);
    e.preventDefault();
    console.log(e.target)
    console.log('index : ',props.index);
    console.log('address : ', connectedAccount);
    checkAccessAbility(ADMIN , connectedAccount , props.index);
  };

  const removeIOT= (e) => {
    console.log(e.target);
    e.preventDefault();
    console.log('index : ',props.index);
    RemoveIOTTrans(props.index , connectedAccount);
  }

  return (
    <div className='device'>
          <p value={props.index} className="device-name" onClick={iotSwitch}>{props.name} </p>
          <p value={props.index} className='remove' onClick={removeIOT}><FontAwesomeIcon icon={faTrash}/></p>
          <span id={props.index} className="access-denied"></span>
    </div>
  )
}
