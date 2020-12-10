import { useState } from "react";
import './BoardForm.css';
import Button from './../Button/Button';

const BoardForm = ({ id }) => {

    const [title, setTitle] = useState();

    const [description, setDescription] = useState();

    const body = {
        'author': id,
        'title': title,
        'description': description,
        'collaborators': []
    };
    
    const handleSubmit = () => {

        const options = {
            'method': 'POST',
            'headers': {
                'Content-Type': 'application/json'
            },
            'body': JSON.stringify(body)
            
        }

        fetch('http://localhost:5000/api/boards', options)
        .then(response => console.log(response))
        .then(json => console.log(json));
    }
    
    
    return (
        <div className='boardform_container'>
            <span>Create board</span>
            <form className='form'>
                <label>Name</label>
                <input type='text' name='name' onChange={(e) => setTitle(e.target.value)}/>
                <label>Description</label>
                <input type='text' name='description' onChange={(e) => setDescription(e.target.value)}></input>
                <Button text={'Enviar'} onClick={handleSubmit} />
            </form>
        </div>
    )
}

export default BoardForm;