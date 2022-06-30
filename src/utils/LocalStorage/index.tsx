import { User } from "../../models/User";

type UserAuth = Pick<User, "username" | "type">;

const KEY_USER = "@KnucklesVision:User";

export function saveUserOnStorage(user: UserAuth) {
  localStorage.setItem(KEY_USER, JSON.stringify(user));
}

export function getUserOnStorage(): UserAuth | null {
  const dataString = localStorage.getItem(KEY_USER);
  const user = dataString ? (JSON.parse(dataString) as UserAuth) : null;
  return user;
}
