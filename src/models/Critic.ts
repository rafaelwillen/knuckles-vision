import { Album } from "./Album";
import { User } from "./User";
import { Video } from "./Video";

export interface Critic {
  id_critic: string;
  comment: string;
  note: 0 | 1 | 2 | 3 | 4 | 5;
  user: User;
  video: Video;
  album: Album;
}
