import searchIcon from '../../../src/images/lupa.png'

function SearchBar({inputText,setInputText}) {

    let inputHandler = (e) => {
        //convert input text to lower case
        var lowerCase = e.target.value.toLowerCase();
        setInputText(lowerCase);
    };

    return (
        <div className="search-bar-flex">
            <div className="search-icon-container">
                <img src={searchIcon} alt="search-icon"></img>
            </div>
            <input
                type="text"
                className="search-input"
                placeholder="Search"
                value={inputText}
                onChange={inputHandler}
            ></input>
        </div>
    )
}

export default SearchBar
