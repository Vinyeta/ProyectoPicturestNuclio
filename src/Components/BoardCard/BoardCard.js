import './BoardCard.css';
import Edit from '../../Assets/Edit.png' 


const BoardCard = ({ title,  pins}) => {


    return (
        <div className='board__container'>
            <div className='bottom_container'>
                <div className='spans_container'>
                    <span className='title'>{title}</span>
                    <span className='pins_count'>{pins} Pins</span>
                </div>
                <div className='edit'>
                    <img src={Edit} alt='Edit button' />
                </div>
            </div>
        </div>
    );
}

export default BoardCard;