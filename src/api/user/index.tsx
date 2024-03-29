import instance from "../instance";

type User = {
  email: string;
  password: string;
};
export const login = (data: User) => {
  return instance.post("/api/login", data);
};
export const getUsers = () => {
  return instance.get("/api/users");
};
