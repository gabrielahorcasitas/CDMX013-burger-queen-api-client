import SearchBar from './SearchBar'
function Header({inputText, setInputText}) {
    return (
        <header>
            <SearchBar inputText={inputText} setInputText={setInputText} />
            <h1 className="role-letters">Admin</h1>
        </header>
    )
}

export default Header
