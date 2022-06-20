import React from "react";
import { Props } from "./type";

const VideoThumbnail: React.FC<Props> = ({ video, onClick }) => {
  const {
    publicationDate,
    thumbnailImage,
    author: videoOwner,
    videoTitle,
  } = video;
  return (
    <div
      className="cursor-pointer flex flex-col gap-1"
      onClick={() => onClick("1")}
    >
      <img src={thumbnailImage} alt={videoTitle} />
      <h3 className="font-bold">{videoTitle}</h3>
      <p className="font-normal text-sm text-grey-400">{videoOwner}</p>
      <p className="text-sm">{publicationDate.toLocaleDateString()}</p>
    </div>
  );
};

export default VideoThumbnail;
