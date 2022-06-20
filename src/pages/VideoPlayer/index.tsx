import React from "react";
import { Player } from "video-react";
import { MdDownload } from "react-icons/md";
import "video-react/dist/video-react.css";
import SearchInput from "../../components/SearchInput";
import VideoSource from "../../assets/trailer.mp4";

const VideoPlayer = () => {
  function handleSearch(searchQuery: string) {
    console.log(searchQuery);
  }

  return (
    <main className="flex-1">
      <SearchInput onSearch={handleSearch} />
      <section className="flex flex-col items-center py-6">
        <Player src={VideoSource} fluid={false} width={960} height={540} />
        <article className="mx-14 my-8 flex">
          <div className="flex-1">
            <h2 className="text-2xl mb-2">{"Titulo #1"}</h2>
            <p className="text-xl text-grey-500 mb-2">{"Sonic"}</p>
            <p className="mb-2">
              Publicado em <span>{new Date().toLocaleDateString()}</span>
            </p>
            <button className="border-gray-400 border w-1/2 py-2 flex items-center justify-center gap-6 hover:bg-white hover:text-black transition">
              Download <MdDownload />
            </button>
          </div>
          <p className="flex-1 text-base leading-7">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo
            tempora inventore incidunt minus assumenda, corrupti ad provident
            ratione odit officia.
          </p>
        </article>
      </section>
    </main>
  );
};

export default VideoPlayer;
