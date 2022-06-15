import '../CSS/SeachBar.css';

const SearchBar = ({onChange, placeholder}) => {
    return (
      <div className="Search p-3">
        <input
          className="SearchInput"
          type="text"
          onChange={onChange}
          placeholder={placeholder}
        />
      </div>
    );
  };

  export default SearchBar;