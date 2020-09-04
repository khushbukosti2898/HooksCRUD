import React, { useState, useCallback } from "react";
import InputBox from '../components/CommonComponents/InputBox';
const Search = (props) => {
  console.log("search")
  const [searchValue, setSearchValue] = useState("");
  const [data, setData] = useState("");

  const handleSearchInputChanges = useCallback(e => {
    setSearchValue(e.target.value);
  }, []);

  const resetInputField = () => {
    setSearchValue("")
  }

  const callSearchFunction = e => {
    e.preventDefault();
    search(searchValue);
    resetInputField();
  }
  const search = value => {
    let oldList = props.data;
    setData((oldList.filter(user => (user.name === value ? user : ''))));
  }
  return (<>
    <form className="search">
      <InputBox
        name="serchValue"
        onChange={handleSearchInputChanges}
      />

      <input onClick={callSearchFunction} type="submit" value="SEARCH USER" />
      {(data.length > 0) ?
        data.map((data) => <>
          <p>id:{data.id}<br />
          name:{data.name}<br />
          username:{data.username}</p>
        </>) : ""}
    </form>
  </>);
}

export default Search;