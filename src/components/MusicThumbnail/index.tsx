import React from "react";
import { Props } from "./type";

const MusicThumbnail: React.FC<Props> = ({ music, onClick }) => {
  const { author, musicTitle, thumbnailImage } = music;
  return (
    <div
      className="cursor-pointer flex flex-col gap-1"
      onClick={() => onClick("1")}
    >
      <img src={thumbnailImage} alt={musicTitle} />
      <h3 className="font-bold">{musicTitle}</h3>
      <p className="font-normal text-sm text-grey-400">{author}</p>
    </div>
  );
};

export default MusicThumbnail;
