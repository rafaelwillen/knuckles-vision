import { User } from "./User";

export interface Group {
  id_group: string;
  nameGroup: string;
  description: string;
  admin: User;
  UserGroup: User[];
}
