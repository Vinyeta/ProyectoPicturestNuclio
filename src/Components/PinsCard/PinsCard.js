import "./PinsCard.css";


const PinsCard = ({urlImage, name}) => {

    return(
        <div className="pin__container">
            <img src={urlImage} alt="pin"/>
            <span>{name}</span>
        </div>
    );
};

export default PinsCard;