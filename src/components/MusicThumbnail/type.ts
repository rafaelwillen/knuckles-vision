import { MusicThumbnail } from "../../routes/Home/type";

export type Props = {
  music: MusicThumbnail;
  onClick: (musicID: string) => void;
};
