import { useEffect, useState} from 'react';
import './App.css';
import Header from './Components/Header/Header';

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
      <Header 
      avatar={user.avatar}
      firstname={user.firstName} 
      lastname={user.lastName} 
      />
      <HomePage user={user} />
    </div>
  );
}

export default App;
