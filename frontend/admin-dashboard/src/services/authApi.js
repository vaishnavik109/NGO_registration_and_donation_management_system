import api from "./api";

export const adminLogin = (credentials) => {
  return api.post("/auth/login", credentials);
};
