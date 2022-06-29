import { Album } from "./Album";
import { User } from "./User";

export interface Music {
  id_music: string;
  cover: string;
  title: string;
  actor: string;
  musicPath: string;
  create_at: Date;
  albums: Album;
  user: User;
}
