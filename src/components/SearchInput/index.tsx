import React, { useState } from "react";
import { MdSearch } from "react-icons/md";
import { Props } from "./types";

const SearchInput: React.FC<Props> = ({ onSearch }) => {
  const [searchQuery, setSearchQuery] = useState("");

  return (
    <form
      className="flex justify-center py-4 bg-dark-900 border-dark-700
       border-b-2"
      onSubmit={(e) => {
        e.preventDefault();
        onSearch(searchQuery);
      }}
    >
      <input
        className="w-2/3 p-2 bg-dark-600 outline-slate-800"
        placeholder="Pesquise vídeos e músicas..."
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
      />
      <button
        type="submit"
        className="bg-grey-600 p-3 flex items-center justify-center
        cursor-pointer transition hover:bg-grey-700"
      >
        <MdSearch size={20} />
      </button>
    </form>
  );
};

export default SearchInput;
