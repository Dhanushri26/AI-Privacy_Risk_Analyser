import axios from "axios";

const API = axios.create({
  baseURL: "http://127.0.0.1:8000",
});


export const uploadFile = async (file) => {
  const formData = new FormData();
  formData.append("file", file);

  const response = await API.post("/upload", formData, {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  });

  return response.data;
};

export const redactText = async (text) => {
    const response = await API.post("/redact", { text });
    return response.data;
  };