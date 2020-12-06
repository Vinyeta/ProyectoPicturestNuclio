import { useState } from 'react';
import './DropDownUser.css';
import forward from './../../Assets/Forward.png';

const DropDownUser = ({ avatar, firstname, lastname }) => {

    const [toggle, setToggle] = useState(false);

    const handleToggle = () => {
        setToggle(!toggle);
    };

    return (
        <div>
            <div className='img'>
                <img src={avatar} alt='User avatar' id='avatar' />
                <img src={forward} alt='Dropdown arrow'  onClick={handleToggle} id='forward' />
            </div>
              {toggle &&
                <div className='dropDown'>
                    <span>{firstname} {lastname}</span>
                    <span>Update profile</span>
                    <span>My boards</span>
                    <span>My pins</span>
                    <span>Log out</span>
                </div>
                }   
        </div>
    )

};

export default DropDownUser;