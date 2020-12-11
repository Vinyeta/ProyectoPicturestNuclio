import UserCard from '../Components/UserCard/UserCard';
import BoardList from '../Components/BoardList/BoardList';
import BoardForm from '../Components/BoardForm/BoardForm';

const UserProfilePage = ({ user }) => {

    return (
        <div>
            <UserCard 
                firstname={user.firstName} 
                lastname={user.lastName} 
                username={user.userName} 
                avatar={user.avatar} 
                numberfollowing={user.following}
            />
            <BoardList />
            <BoardForm />
        </div>    
    )
};

export default UserProfilePage;