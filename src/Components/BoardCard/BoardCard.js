import './BoardCard.css'; 


const BoardCard = ({ title,  pins}) => {


    return (
        <div className='board__container'>
            <div className='spans_container'>
                <span className='title'>{title}</span>
                <span className='pins_count'>{pins} Pins</span>
            </div>
        </div>
    );
}

export default BoardCard;