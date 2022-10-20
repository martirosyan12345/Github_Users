import {useEffect, useState} from 'react'
import './App.css';
import User from './components/user/User'
import Header from './components/Header/Header';

function App() {
  const [users, setUsers] = useState([]);
  const [staticUsers, setStaticUsers] = useState([])
  const [text,setText] = useState('')

  useEffect (() =>{
    fetch('https://api.github.com/users')
    .then((resolve)=> resolve.json())
    .then((data) => {
      setUsers(data)
      setStaticUsers(data)
    })
    .catch((err) => console.log(err));
  },[])

  useEffect(()=>{
  if (text.length >= 2) {
    setUsers(staticUsers.filter((user)=> user.login.includes(text)))
  }
  else{
    setUsers(staticUsers)
  }
  },[text])

  const deleteUser =(item) => {
    setUsers(users.filter((user) => user.id !== item.id))
  }

  return (
    <div className="App">
    <Header text={text} setText={setText} />
      <div className='display_users'>
        {
          users.map((user) => {
            return <User key={user.id} user={user} deleteUser={deleteUser} />
          })
        }
      </div>
    </div>
  );
}


export default App;
