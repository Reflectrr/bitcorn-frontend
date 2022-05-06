import axios from "axios";

const baseUrl = "http://ec2-13-57-26-92.us-west-1.compute.amazonaws.com:5000";

export const getPrediction = async () => {
  const response = await axios.get(`${baseUrl}/prediction`);
  return response.data;
};

export const getData = async () => {
  const response = await axios.get(`${baseUrl}/data`);
  return response.data;
};
