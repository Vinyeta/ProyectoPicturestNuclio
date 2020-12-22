import { useState } from 'react';
import UserCard from '../Components/UserCard/UserCard';
import BoardList from '../Components/BoardList/BoardList';
import BoardForm from '../Components/BoardForm/BoardForm';
import Modal from 'react-modal';
import './ModalButton.css';
import Vector from '../Assets/Vector.png';



const UserProfilePage = ({ user }) => {
    
    const customStyles = {
        content : {
          top                   : '50%',
          left                  : '50%',
          right                 : 'auto',
          bottom                : 'auto',
          marginRight           : '-50%',
          transform             : 'translate(-50%, -50%)'
        }
      };


    const [modalIsOpen, setIsOpen] = useState(false);

    const openModal = () => {
        setIsOpen(true);
    }

    const closeModal = () => {
        setIsOpen(false);
    }

    return (
        <div>
            <UserCard 
                firstname={user.firstName} 
                lastname={user.lastName} 
                username={user.userName} 
                avatar={user.avatar} 
                numberfollowing={user.following}
            />
            <BoardList />
            <div className='ModalButton' onClick={openModal}>
                <img src={Vector} alt='Crear pin'  />
            </div>
            <Modal
                isOpen={modalIsOpen}
                onRequestClose={closeModal}
                style={customStyles}
                contentLabel="Pins Form"
            >
                <BoardForm />
            </Modal>
        </div>    
    )
};

export default UserProfilePage;