import './Button.css';

function Button({ text, onClick }) {

    return (
        <div>
            <div type='button' id='button' onClick={onClick}>{text}</div>
        </div>
    );
}

export default Button;