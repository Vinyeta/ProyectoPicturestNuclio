import { useState, useEffect } from 'react';
import './BoardList.css';
import BoardCard from './../BoardCard/BoardCard';

const BoardList = () => {
    const [boards, setBoards] = useState([]);

    useEffect (() => {
        fetch("http://localhost:5000/api/boards")
        .then((response) => response.json())
        .then ((json) => setBoards(json));
    },[]);

    return (
        <div className='BoardList'>
            <span>Boards</span>
            <div className='boardsList_container'>
                {boards.map((board) => (
                    <BoardCard title={board.title} id={board.id} pins={board.numPins} />
                ))}
            </div>
        </div>
    )
}

export default BoardList;