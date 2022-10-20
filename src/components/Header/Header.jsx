import './Header.css'

function Header({text, setText}) {
    return(
        <div className="header">
        <div className="jsx">
            <h1>Gith</h1>
        </div>
        <input type={'text'} placeholder='Search user...' value={text} onChange={(e) => setText(e.target.value)}/>
        </div>
    )
}
export default Header