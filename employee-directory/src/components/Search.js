function Search({results, handleInputChange}){
    return(
        <input 
        type="text" 
        className="form-control" 
        aria-label="Text input with dropdown button" 
        placeholder="Search By Name"
        value={results}
        onChange={handleInputChange}
        />
    )
}

export default Search