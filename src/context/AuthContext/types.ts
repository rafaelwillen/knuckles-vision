import User from "../../models/User";

export type AuthContextType = {
  user: User;
  signIn: SignInFunction;
  createUser: CreateUser;
  signOut: () => Promise<void>;
  isLoading: boolean;
};

export type SignInFunction = (signInArgs: SignInArgs) => Promise<void>;
export type CreateUser = (user: User) => Promise<void>;

export type SignInArgs = {
  username: string;
  password: string;
};
