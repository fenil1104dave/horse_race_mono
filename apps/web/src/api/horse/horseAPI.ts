import api from "../Axios/axiosInstance";

export const getAllHorses = () =>
    api.get("/horses").then((res) => res.data.data);
