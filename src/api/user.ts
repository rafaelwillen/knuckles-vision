import { User, UserType } from "../models/User";
import { AxiosClient } from "./apiConfig";

async function deleteUser(username: string) {
  try {
    const response = await AxiosClient.delete(`/user/${username}`);
    if (response.status != 200) throw new Error("Erro no servidor");
  } catch (error) {
    console.error(error);
  }
}

async function loginUser(username: string, password: string) {
  try {
    const response = await AxiosClient.post("/login/user", {
      username,
      password,
    });
    if (response.status != 200) throw new Error("Erro no servidor");
    const user = response.data as Pick<User, "username" | "type">;
    return user;
  } catch (error) {}
}

async function createUser(user: Pick<User, "username" | "password" | "type">) {
  try {
    const response = await AxiosClient.post("/user", user);
    if (response.status != 200) throw new Error("Erro no servidor");
  } catch (error) {
    console.log(error);
  }
}

export default {
  deleteUser,
  loginUser,
  createUser,
};
