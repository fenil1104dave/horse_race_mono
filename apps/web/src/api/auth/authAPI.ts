import api from "../Axios/axiosInstance";
import {
    LoginBody,
    LoginResponse,
    RegisterBody,
    RegisterResponse,
} from "./types";

export const login = (data: LoginBody) =>
    api.post("/login", data).then((res) => res.data as LoginResponse);

export const register = (data: RegisterBody) =>
    api.post("/register", data).then((res) => res.data as RegisterResponse);
