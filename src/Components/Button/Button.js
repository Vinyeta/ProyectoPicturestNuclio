import './Button.css';

function Button({ text, onClick }) {

    return (
        <div>
            <button id='button' onClick={onClick}>{text}</button>
        </div>
    );
}

export default Button;