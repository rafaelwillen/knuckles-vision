import React from "react";
import VideoThumbnail from "../VideoThumbnail";
import { Props } from "./type";

const RecentVideos: React.FC<Props> = ({ videos }) => {
  return (
    <section className="p-5">
      <h2 className="text-2xl">Videos Recentes</h2>
      <div className="grid grid-rows-2  grid-cols-2  md:grid-cols-3 lg:grid-flow-col gap-6">
        {videos.map((video) => (
          <VideoThumbnail video={video} />
        ))}
      </div>
    </section>
  );
};

export default RecentVideos;
