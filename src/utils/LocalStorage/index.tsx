import User from "../../models/User";

const KEY_USER = "@KnucklesVision:User";

export function saveUserOnStorage(user: User) {
  localStorage.setItem(KEY_USER, JSON.stringify(user));
}

export function getUserOnStorage(): User | null {
  const dataString = localStorage.getItem(KEY_USER);
  const user = dataString ? (JSON.parse(dataString) as User) : null;
  return user;
}
