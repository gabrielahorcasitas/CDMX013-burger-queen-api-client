import searchIcon from '../../../src/images/lupa.png'

function SearchBar() {
    return (
        <div className="search-bar-flex">
            <div className="search-icon-container">
                <img src={searchIcon} alt="search-icon"></img>
            </div>
            <input
                type="text"
                className="search-input"
                placeholder="Search"
            ></input>
        </div>
    )
}

export default SearchBar
