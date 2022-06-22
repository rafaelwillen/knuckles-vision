import React from "react";
import { MdDownload, MdFavorite } from "react-icons/md";
import MusicPlayerDetails from "../../components/MusicPlayerDetails";
import SearchInput from "../../components/SearchInput";
import { Music } from "./type";

const MusicPlayer = () => {
  const music: Music = {
    src: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3",
    title: "SoundHelix",
    album: "SoundHelix",
    artist: "Willen",
    publicationDate: new Date().toLocaleDateString(),
    duration: 372,
    thumbnail: "https://via.placeholder.com/300",
  };

  function handleSearch(searchQuery: string) {}

  function handleDownloadMusic() {}

  function handleFavoriteMusic() {}

  return (
    <section className="flex-1">
      <SearchInput onSearch={handleSearch} />
      <div className="mt-10 flex flex-col items-center gap-5">
        <MusicPlayerDetails music={music} />
        <audio
          controlsList="nodownload"
          controls
          className="w-2/3"
          autoPlay={false}
          src={music.src}
        ></audio>
        <div className="flex gap-5">
          <button
            onClick={handleDownloadMusic}
            className="flex items-center justify-center gap-2 rounded-sm  flex-1 bg-grey-900 px-5 py-2 hover:bg-grey-500 transition"
          >
            Download <MdDownload />
          </button>
          <button
            onClick={handleFavoriteMusic}
            className="flex items-center justify-center gap-2 rounded-sm  flex-1 bg-grey-900 px-5 py-2 hover:bg-grey-500 transition"
          >
            Favorito <MdFavorite />
          </button>
        </div>
      </div>
    </section>
  );
};

export default MusicPlayer;
