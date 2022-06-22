import React from "react";
import { Props } from "./type";

const MusicPlayerDetails: React.FC<Props> = ({ music }) => {
  const { album, artist, publicationDate, src, title, thumbnail } = music;
  return (
    <article>
      <img className="rounded-lg" src={thumbnail} alt={album} />
      <div className="flex flex-col items-center gap-1 mt-4">
        <p className="text-lg font-bold">{title}</p>
        <p className="text-grey-200">{artist}</p>
        <p>
          <strong>Album:</strong> {album}
        </p>
        <p>
          <strong>Publicado em:</strong> {publicationDate}
        </p>
      </div>
    </article>
  );
};

export default MusicPlayerDetails;
