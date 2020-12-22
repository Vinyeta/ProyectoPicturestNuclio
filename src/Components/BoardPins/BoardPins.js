import './BoardPins.css';
import PinsCard from './../PinsCard/PinsCard';

const BoardPins = ({ pins }) => {


    return (

        <div className='container'>
            {pins && pins.map((pin) => (
                    <PinsCard urlImage={pin.urlImage} name={pin.name} />
                ))}
        </div>
    )
}

export default BoardPins;