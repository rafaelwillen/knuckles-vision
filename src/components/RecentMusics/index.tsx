import React from "react";
import { useNavigate } from "react-router-dom";
import MusicThumbnail from "../MusicThumbnail";
import { Props } from "./type";

const RecentMusics: React.FC<Props> = ({ musics }) => {
  const navigate = useNavigate();

  function handleMusicPress(musicID: string) {
    navigate(`/music/${musicID}`);
  }

  return (
    <section className="p-5">
      <h2 className="text-2xl mb-2">Músicas Recentes</h2>
      <div className="flex justify-between flex-wrap">
        {musics.map((music, index) => (
          <MusicThumbnail
            key={index}
            music={music}
            onClick={handleMusicPress}
          />
        ))}
      </div>
    </section>
  );
};

export default RecentMusics;
