import '../App.css';
import UserCard from '../Components/UserCard/UserCard';
import PinsList from '../Components/PinsList/PinsList';
import BoardList from '../Components/BoardList/BoardList';
import BoardForm from '../Components/BoardForm/BoardForm';
import PinsForm from '../Components/PinsForm/PinsForm';

const HomePage = ({ user }) => {

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
            <BoardForm id={user.id}/>
            <PinsList  />
            <PinsForm id={user.id} />
        </div>
    )
}

export default HomePage;