import React from "react";
import { useNavigate } from "react-router-dom";
import VideoThumbnail from "../VideoThumbnail";
import { Props } from "./type";

const RecentVideos: React.FC<Props> = ({ videos }) => {
  const navigate = useNavigate();

  function handleVideoPress(videoID: string) {
    navigate(`/video/${videoID}`);
  }

  return (
    <section className="p-5">
      <h2 className="text-2xl mb-2">Videos Recentes</h2>
      <div className="grid grid-rows-2  grid-cols-2  md:grid-cols-3 lg:grid-cols-4 gap-6">
        {videos.map((video, index) => (
          <VideoThumbnail
            key={index}
            video={video}
            onClick={handleVideoPress}
          />
        ))}
      </div>
    </section>
  );
};

export default RecentVideos;
