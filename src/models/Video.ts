import { Critic } from "./Critic";
import { User } from "./User";

export interface Video {
  id_video: string;
  cover: string;
  title: string;
  actor: string;
  description: string;
  videoPath: string;
  user: User;
  create_at: Date;
  Critic: Critic[];
}
