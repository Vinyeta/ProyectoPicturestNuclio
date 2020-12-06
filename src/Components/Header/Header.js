import './Header.css';
import logo from './../../Assets/Logo_with_text.png';
import Button from './../Button/Button';
import DropDownUser from './../DropDownUser/DropDownUser';

const Header = ({ avatar, firstname, lastname }) => {

    return (
        <div className='header'>
            <div className='left'>
                <img src={logo} alt='logo' id='logo'/>
                <Button text={'Home'} />
            </div>
            <DropDownUser avatar={avatar} firstname={firstname} lastname={lastname} />      
        </div>
    )

}

export default Header;