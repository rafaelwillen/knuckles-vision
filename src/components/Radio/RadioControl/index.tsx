import React from "react";
import { MdVolumeOff, MdVolumeUp } from "react-icons/md";
import DefaultRadioImage from "../../../assets/defaultRadioImage.jpg";
import { useRadio } from "../../../context/RadioContext";

const RadioControl = () => {
  const { selectedStation, isMuted, onMuteStateChange } = useRadio();

  const radioImage = selectedStation.favicon
    ? selectedStation.favicon
    : DefaultRadioImage;

  return (
    <article className="flex-1 flex flex-col justify-center items-center gap-4 mt-16">
      <img className="w-[300px]" src={radioImage} alt={selectedStation.name} />
      <audio
        autoPlay
        preload="metadata"
        src={selectedStation.urlResolved}
        title={selectedStation.name}
        muted={isMuted}
      ></audio>
      <div className="flex items-center gap-4">
        <div
          className="bg-white rounded-full flex items-center justify-center h-fit p-3 cursor-pointer hover:bg-slate-500 transition"
          onClick={() => onMuteStateChange(!isMuted)}
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
