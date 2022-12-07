

function Search({setSearch}) {
    return (
        <div className="searchBar">
          <input
            type="text"
            id="search"
            size="35"
            placeholder="Search by Location or Event Name"
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>
      );
    }
    
    

export default Search;