import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import PinsForm from '../Components/BoardForm/BoardForm';
import BoardPins from './../Components/BoardPins/BoardPins';
import Vector from '../Assets/Vector.png';




const BoardPage = () => {

    const params = useParams();

    const [board, setBoard] = useState({});

    useEffect(() => {
        fetch(`http://localhost:5000/api/boards/${params.id}`)
        .then((response) => response.json())
        .then((json) => setBoard(json));
    },[]);

    const [toggle, setToggle] = useState(false);

    const handleToggle = () => {
        setToggle(!toggle);
    };


    return (
        <div>
            <span>{board.title}</span>
            <span>{board.authorName}</span>
            <div>
                <img src={Vector} alt='Crear pin' onClick={handleToggle} />
            </div>
            {toggle &&
                <PinsForm />
            }
         
                <BoardPins pins={board.boardPins} />
            
        </div>
    )
};

export default BoardPage;