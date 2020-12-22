import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Modal from 'react-modal';
import PinsForm from '../Components/PinsForm/PinsForm';
import BoardPins from './../Components/BoardPins/BoardPins';
import Vector from '../Assets/Vector.png';
import './ModalButton.css';




const BoardPage = () => {

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

    const params = useParams();

    const [board, setBoard] = useState({});

    useEffect(() => {
        fetch(`http://localhost:5000/api/boards/${params.id}`)
            .then((response) => response.json())
            .then((json) => setBoard(json));
    }, []);


    return (
        <div>
            <span>{board.title}</span>
            <span>{board.authorName}</span>
            <div className='ModalButton' onClick={openModal}>
                <img src={Vector} alt='Crear pin'  />
            </div>
            <Modal
                isOpen={modalIsOpen}
                onRequestClose={closeModal}
                style={customStyles}
                contentLabel="Pins Form"
            >
                <PinsForm />
            </Modal>

                <BoardPins pins={board.boardPins} />

        </div>
    )
};

export default BoardPage;