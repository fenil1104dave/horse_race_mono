import axios from "axios";

let isRefreshing = false;
let refreshSubscribers: ((token: string) => void)[] = [];

const api = axios.create({
    baseURL: "http://localhost:3000/api/v1",
});

const getAccessToken = () => {
    return localStorage.getItem("accessToken");
};

const getRefreshToken = () => {
    return localStorage.getItem("refreshToken");
};

export const setTokens = (accessToken: string, refreshToken: string) => {
    localStorage.setItem("accessToken", accessToken);
    localStorage.setItem("refreshToken", refreshToken);
};

export const removeTokens = () => {
    localStorage.removeItem("accessToken");
    localStorage.removeItem("refreshToken");
};

const addRefreshSubscriber = (callback: (token: string) => void) => {
    refreshSubscribers.push(callback);
};

const onRefreshed = (token: string) => {
    refreshSubscribers.map((callback) => callback(token));
};

api.interceptors.request.use(
    (config) => {
        const token = getAccessToken();
        if (token) {
            config.headers.Authorization = `Bearer ${token}`;
        }
        return config;
    },
    (error) => {
        return Promise.reject(error);
    }
);

api.interceptors.response.use(
    (response) => {
        return response;
    },
    async (error) => {
        const originalRequest = error.config;

        if (error.response.status === 401 && !originalRequest._retry) {
            if (!isRefreshing) {
                originalRequest._retry = true;
                isRefreshing = true;

                try {
                    const refreshToken = getRefreshToken();
                    if (!refreshToken) {
                        window.location.href = "/login";
                        throw new Error("Token not valid.");
                    }

                    const response = await axios.post(
                        "http://localhost:3000/api/v1/refresh",
                        { token: refreshToken }
                    );
                    const { token } = response.data;

                    setTokens(token, refreshToken);
                    api.defaults.headers.common.Authorization = `Bearer ${token}`;

                    onRefreshed(token);
                    isRefreshing = false;
                    refreshSubscribers = [];

                    return api(originalRequest);
                } catch (err) {
                    isRefreshing = false;
                    refreshSubscribers = [];
                    window.location.href = "/login";
                    return Promise.reject(err);
                }
            }

            return new Promise((resolve) => {
                addRefreshSubscriber((token: string) => {
                    originalRequest.headers.Authorization = `Bearer ${token}`;
                    resolve(api(originalRequest));
                });
            });
        }

        return Promise.reject(error);
    }
);

export default api;
