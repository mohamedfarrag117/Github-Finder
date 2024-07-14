import React, { useState } from "react";

const Search = ({ onSearch }) => {
  const [username, setUsername] = useState("");

  const handleInput = (e) => {
    setUsername(e.target.value);
  };

  const handleSearch = () => {
    onSearch(username);
  };

  return (
    <div className="search-container flex flex-col justify-center items-center p-16 gap-6">
      <input
        className="input-search w-[70rem] min-w-screen max-w-full  h-10 pl-2 rounded-sm border-2 border-opacity-20 border-black"
        type="text"
        placeholder="Github username"
        value={username}
        onChange={handleInput}
      />

      <button
        className="btn-search border-1 border-white rounded-sm w-[70rem] min-w-screen max-w-full  h-10 text-white bg-black hover:bg-stone-500 transition ease-in-out transform duration-500 "
        onClick={handleSearch}
      >
        Search
      </button>
    </div>
  );
};

export default Search;
