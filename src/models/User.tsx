class User {
  public username: string;
  public password: string;
  public userType: UserType;

  constructor(
    username: string,
    password: string,
    userType: UserType = UserType.GUEST
  ) {
    this.password = password;
    this.userType = userType;
    this.username = username;
  }
}

export enum UserType {
  NORMAL = "normal",
  GUEST = "guest",
  EDITOR = "editor",
}

export default User;
