import axios from "axios";

export const getAccount = async () => {
  const response = await axios.get("http://localhost:3000/account");
  return response.data;
};

/* export const getTest = async () => {
  const response = await axios.get(`http://localhost:4000/test`);
  return response.data;
};

export const getTestById = async () => {
  const response = await axios.get(`http://localhost:4000/test/${id}`);
  return response.data;
}; */