import { useState } from "react";
import './PinsForm.css';
import Button from '../Button/Button';

const PinsForm = ({ id }) => {

    const [name, setName] = useState();

    const [urlImage, setUrlImage]= useState();

    const [description, setDescription] = useState();

    const [board, setBoard] = useState();

    const body = {
        'board': board,
        'author': id,
        'urlImage': urlImage,
        'name': name,
        'description': description
    }
    
    const handleSubmit = () => {

        const options = {
            'method': 'POST',
            'headers': {
                'Content-Type': 'application/json'
            },
            'body': JSON.stringify(body)
            
        }

        fetch('http://localhost:5000/api/pins', options)
        .then(response => console.log(response))
        .then(json => console.log(json));
    }
    
    return (
        <div className='pinform_container'>
            <span>Create pin</span>
            <form className='form'>
                <div>
                    <div>
                        <label>Title</label>
                        <input type='text' name='name' onChange={(e) => setName(e.target.value)}/>
                    </div>
                    <div>
                        <label>URL Link</label>
                        <input type='text' name='urlImage' onChange={(e) => setUrlImage(e.target.value)} />
                    </div>
                 </div>
                 <div>
                     <div>
                        <label>Description</label>
                        <input type='text' name='description' onChange={(e) => setDescription(e.target.value)} />
                    </div>
                    <div>
                        <label>Board</label>
                        <input type='text' name='board' onChange={(e) => setBoard(e.target.value)} />
                    </div>
                </div>
                <Button text={'Enviar'} onClick={handleSubmit} />
                
            </form>
        </div>
    )
}

export default PinsForm;