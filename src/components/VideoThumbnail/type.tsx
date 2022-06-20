import { VideoThumbnail } from "../../routes/Home/type";

export type Props = {
  video: VideoThumbnail;
  onClick: (videoID: string) => void;
};
