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
        <div className='boardsList_container'>
            {boards.map((board) => (
                <BoardCard title={board.title} id={board.id} pins={1} />
            ))}
        </div>
    )
}

export default BoardList;