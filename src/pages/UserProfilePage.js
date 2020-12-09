import UserCard from '../Components/UserCard/UserCard';

const UserProfilePage = ({ user }) => {

    return (
        <UserCard 
            firstname={user.firstName} 
            lastname={user.lastName} 
            username={user.userName} 
            avatar={user.avatar} 
            numberfollowing={user.following}
        />
    )
};