import axios from "axios";

const baseUrl = "http://172.31.22.99:5000";

export const getPrediction = async () => {
  const response = await axios.get(`${baseUrl}/prediction`);
  return response.data;
};

export const getData = async () => {
  const response = await axios.get(`${baseUrl}/data`);
  return response.data;
};
