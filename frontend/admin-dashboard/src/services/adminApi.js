const BASE_URL = "http://localhost:5000/admin";

export const getUsers = async () => {
  const res = await fetch(`${BASE_URL}/users`);
  return res.json();
};

export const getDonations = async () => {
  const res = await fetch(`${BASE_URL}/donations`);
  return res.json();
};

export const getSummary = async () => {
  const res = await fetch(`${BASE_URL}/summary`);
  return res.json();
};
