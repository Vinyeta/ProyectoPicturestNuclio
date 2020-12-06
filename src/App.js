import { useEffect, useState} from 'react';
import './App.css';
import PinsList from "./Components/PinsList/PinsList";
import BoardList from './Components/BoardList/BoardList';
import UserCard from './Components/UserCard/UserCard';
import Header from './Components/Header/Header';
import BoardForm from './Components/BoardForm/BoardForm';
import PinsForm from './Components/PinsForm/PinsForm';

function App() {
  
  const [user, setUser] = useState({});

  useEffect(() => {
    fetch("http://localhost:5000/api/users/1")
      .then((response) => response.json())
      .then((json) => setUser(json));
  },[]);

  return (
    <div>
      <Header 
      avatar={user.avatar}
      firstname={user.firstName} 
      lastname={user.lastName} 
      />
      <UserCard 
      firstname={user.firstName} 
      lastname={user.lastName} 
      username={user.userName} 
      avatar={user.avatar} 
      numberfollowing={user.following}/>
      <BoardList />
      <BoardForm id={user.id}/>
      <PinsList  />
      <PinsForm id={user.id} />
    </div>
  );
}

export default App;
