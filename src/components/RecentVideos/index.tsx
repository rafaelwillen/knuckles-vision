import React from "react";
import VideoThumbnail from "../VideoThumbnail";
import { Props } from "./type";

const RecentVideos: React.FC<Props> = ({ videos }) => {
  return (
    <section className="p-5">
      <h2 className="text-2xl mb-2">Videos Recentes</h2>
      <div className="grid grid-rows-2  grid-cols-2  md:grid-cols-3 lg:grid-cols-4 gap-6">
        {videos.map((video, index) => (
          <VideoThumbnail key={index} video={video} />
        ))}
      </div>
    </section>
  );
};

export default RecentVideos;
