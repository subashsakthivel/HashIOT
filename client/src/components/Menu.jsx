import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';


function Menu() {
  return (
    <div className='menu'>
        <nav>            
            <input type="checkbox" id="check" />
            <label htmlFor="check" className='checkbtn' >
            <FontAwesomeIcon icon={faBars}/>
            </label>
            <label className='logo'>Techgium</label>
            <ul>
                <li><a href="/">Home</a></li>
                <li><a href='/register-iot'>Register IOT</a></li>
                <li><a href="/grantrole">Grant Role</a></li>
                <li><a href="/revokerole">Revoke Role</a></li>
                <li><a href="/change-ownership">Change OwnerShip</a></li>
                <li><a href="/remove-iot">Remove IOT devices</a></li>
            </ul>
        </nav>
    </div>
  )
}

export default Menu