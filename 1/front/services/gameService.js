import axios from "axios";

const api = axios.create({
  baseURL: import.meta.env.VITE_API_URL || "http://localhost:3000",
});

export const getGames = () => api.get("/juegos");
export const getGame = (id) => api.get(`/juegos/${id}`);
export const createGame = (data) => api.post("/juegos", data);
export const updateGame = (id, data) => api.put(`/juegos/${id}`, data);
export const deleteGame = (id) => api.delete(`/juegos/${id}`);
