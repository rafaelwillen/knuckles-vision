import React from "react";
import MusicThumbnail from "../MusicThumbnail";
import { Props } from "./type";

const RecentMusics: React.FC<Props> = ({ musics }) => {
  return (
    <section className="p-5">
      <h2 className="text-2xl mb-2">Músicas Recentes</h2>
      <div className="flex justify-between flex-wrap">
        {musics.map((music, index) => (
          <MusicThumbnail key={index} music={music} />
        ))}
      </div>
    </section>
  );
};

export default RecentMusics;
