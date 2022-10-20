import './User.css'

function User({user, deleteUser}) {
    return (
        <div className='userbox'>
            <img src={user.avatar_url} alt=""/>
            <h2>{user.login}</h2>
            <p>{user.type}</p>
            <a href={user.url}>{user.url}</a>
            <button onClick={() => deleteUser(user)}>Delete User</button>
        </div>
    )
}

export default User;