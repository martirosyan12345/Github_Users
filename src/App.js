import {useEffect, useState} from 'react'
import './App.css';
import User from './components/user/User'
function App() {


  const [users,setUsers] = useState([]);
  useEffect (() =>{
  fetch('https://api.github.com/users')
  .then((resolve)=> resolve.json())
  .then((data) => setUsers(data))
  },[]);
  console.log(users);

  return (
    <div className="App">
    {
      users.map((user) => {
      return <User key={user.id} user={user} />
     })
    }
    </div>
  );
}


export default App;
