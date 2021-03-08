import './BoardCard.css';
import Edit from '../../Assets/Edit.png' 


const BoardCard = ({ board }) => {


    return (
        <div className='board__container'>
            <div className='bottom_container'>
                <div className='spans_container'>
                    <span className='title'>{board.board && board.board.title}</span>
                    <span className='pins_count'>{board.pins && board.pins.length} Pins</span>
                </div>
                <div className='edit'>
                    <img src={Edit} alt='Edit button' />
                </div>
            </div>
        </div>
    );
}

export default BoardCard;