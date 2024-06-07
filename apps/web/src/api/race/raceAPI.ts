import api from "../Axios/axiosInstance";

export const getAllRaces = () => api.get("/races").then((res) => res.data.data);
