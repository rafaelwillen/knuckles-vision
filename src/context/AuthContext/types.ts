import { User } from "../../models/User";

type UserAuth = Pick<User, "username" | "type">;

export type AuthContextType = {
  user: UserAuth;
  signIn: SignInFunction;
  createUser: CreateUser;
  signOut: () => Promise<void>;
  isLoading: boolean;
};

export type SignInFunction = (signInArgs: SignInArgs) => Promise<void>;
export type CreateUser = (
  user: Pick<User, "username" | "password" | "type">
) => Promise<void>;

export type SignInArgs = {
  username: string;
  password: string;
};
