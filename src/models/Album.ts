import { Critic } from "./Critic";
import { Music } from "./Music";

export interface Album {
  id_album: string;
  name: string;
  description: string;
  Critic: Critic[];
  Music: Music[];
}
