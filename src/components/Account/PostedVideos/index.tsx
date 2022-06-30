import React from "react";

const PostedVideos = () => {
  return (
    <div className="flex-1 flex flex-col gap-6 h-full">
      <h3 className="text-center text-lg">Vídeos Postados</h3>
      <div className="flex-1 bg-dark-600 rounded-md overflow-y-auto max-h-72"></div>
    </div>
  );
};

export default PostedVideos;
