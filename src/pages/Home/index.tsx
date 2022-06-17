import React from "react";
import SearchInput from "../../components/SearchInput";

const Home = () => {
  function handleSearch(searchQuery: string) {
    console.log(searchQuery);
  }

  return (
    <div className="flex-1">
      <SearchInput onSearch={handleSearch} />
    </div>
  );
};

export default Home;
