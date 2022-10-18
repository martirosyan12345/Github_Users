function User({user}) {
    return (
        <div>
            <img src={user.avatar_url} alt=""/>
            <h2>{user.login}</h2>
            <p>{user.type}</p>
            <a href={user.url}>{user.url}</a>
        </div>
    )
}

export default User;