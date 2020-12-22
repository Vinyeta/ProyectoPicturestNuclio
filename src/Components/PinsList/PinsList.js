import { useState, useEffect } from 'react';
import './PinsList.css';
import PinsCard from './../PinsCard/PinsCard';


const PinsList = () => {
   
   const [pins, setPins] = useState([]);

    useEffect (() => {
        fetch("http://localhost:5000/api/pins")
        .then((response) => response.json())
        .then ((json) => setPins(json));
    },[]);

    return (
        <div className='container'>
            {pins.map((pin) => (
                    <PinsCard urlImage={pin.urlImage} name={pin.name} source={pin.source} />
                ))}
        </div>
    )
}

export default PinsList;