import { useEffect, useState} from 'react';
import {  BrowserRouter as Router,
          Switch,
          Route } from 'react-router-dom';
import './App.css';
import Header from './Components/Header/Header';
import BoardPage from './pages/boardPage';
import UserProfilePage from './pages/UserProfilePage';
import HomePage from './pages/homePage';

function App() {
  
  const [user, setUser] = useState({});

  useEffect(() => {
    fetch("http://localhost:5000/api/users/1")
      .then((response) => response.json())
      .then((json) => setUser(json));
  },[]);

  return (
    <div>
      <Router>
        <Header 
        avatar={user.avatar}
        firstname={user.firstName} 
        lastname={user.lastName} 
        />
        <Switch>
          <Route path='/boards/:id'>
            <BoardPage />
          </Route>
          <Route path='/user'> 
           <UserProfilePage user={user} />
          </Route>
          <Route path='/'>
            <HomePage user={user} />
          </Route>       
        
        </Switch>
      </Router>
    </div>
  );
}

export default App;
