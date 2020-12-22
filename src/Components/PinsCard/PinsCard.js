import "./PinsCard.css";
import Link from '../../Assets/Link.png';


const PinsCard = ({urlImage, name, source}) => {

    return(
        <div className="pin__container">
            <img src={urlImage} alt="pin"/>
            <div className='source'>
                <img src={Link} alt='link'></img>
                <a href={source} target='_blank' rel="noreferrer">{source}</a>
            </div>
            <span>{name}</span>
        </div>
    );
};

export default PinsCard;