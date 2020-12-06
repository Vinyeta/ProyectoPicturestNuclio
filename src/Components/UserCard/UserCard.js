import './UserCard.css';

const UserCard = ({ firstname, lastname, username, avatar, numberfollowing }) => {

    return (
        <div className='centrate'>
            <div className='userCard_container'>
                <img src={avatar} alt='user avatar'/>
                <span className='fullName'>{firstname} {lastname}</span>
                <span className='userName'>@{username}</span>
                <span className='following'>{numberfollowing && numberfollowing.length} following</span>
            </div>
        </div>
    );

};

export default UserCard;