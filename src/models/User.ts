import { Critic } from "./Critic";
import { Group } from "./Group";
import { Music } from "./Music";
import { Video } from "./Video";

export interface User {
  username: string;
  type: UserType;
  password: string;
  Video: Video[];
  Music: Music[];
  Critic: Critic[];
  Group: Group[];
  UserGroup: Group[];
}

export enum UserType {
  NORMAL = "normal",
  EDITOR = "editor",
  GUEST = "guest",
}
