import React from "react";
import { Props } from "./type";

const VideoThumbnail: React.FC<Props> = ({ video }) => {
  const { publicationDate, thumbnailImage, videoOwner, videoTitle } = video;
  return (
    <div className="cursor-pointer">
      <img src={thumbnailImage} alt={videoTitle} />
      <h3>{videoTitle}</h3>
      <p>{videoOwner}</p>
      <p>{publicationDate.toLocaleDateString()}</p>
    </div>
  );
};

export default VideoThumbnail;
