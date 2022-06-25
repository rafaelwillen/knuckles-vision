import React, { useState } from "react";
import ReactAudioPlayer from "react-audio-player";
import {
  MdPlayCircle,
  MdPauseCircle,
  MdVolumeUp,
  MdVolumeOff,
} from "react-icons/md";

const RadioControl = () => {
  const [isMuted, setMuted] = useState(true);

  return (
    <article className="flex-1 flex flex-col justify-center items-center gap-4 mt-16">
      <img src="https://via.placeholder.com/300" alt="" />
      <ReactAudioPlayer src="" autoPlay />
      <div className="flex items-center gap-4">
        <MdPlayCircle
          size={60}
          className="cursor-pointer hover:text-slate-500 transition"
        />
        <div
          className="bg-white rounded-full flex items-center justify-center h-fit p-3 cursor-pointer hover:bg-slate-500 transition"
          onClick={() => setMuted((muted) => !muted)}
        >
          {isMuted ? (
            <MdVolumeUp size={30} color="black" />
          ) : (
            <MdVolumeOff size={30} color="black" />
          )}
        </div>
      </div>
    </article>
  );
};

export default RadioControl;
