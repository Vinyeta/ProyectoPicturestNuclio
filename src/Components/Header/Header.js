import './Header.css';
import logo from './../../Assets/Logo_with_text.png';
import Button from './../Button/Button';
import DropDownUser from './../DropDownUser/DropDownUser';
import { Link } from 'react-router-dom'

const Header = ({ avatar, firstname, lastname }) => {

    return (
        <div className='header'>
            <div className='left'>
                <Link to='/'>
                 <img src={logo} alt='logo' id='logo'/>
                </Link> 
                <Link to='/'>
                    <Button text={'Home'} />
                </Link>             
            </div>
            <DropDownUser avatar={avatar} firstname={firstname} lastname={lastname} />      
        </div>
    )

}

export default Header;