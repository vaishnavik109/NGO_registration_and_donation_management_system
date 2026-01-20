import api from "./api";

export const fetchDonations = () => {
  return api.get("/donation/all");
};
