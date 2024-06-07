export type LoginBody = {
    username: string;
    password: string;
};

export type LoginResponse = {
    token: string;
    refreshToken: string;
};

export type RegisterBody = {
    name: string;
    username: string;
    password: string;
};

export type User = {
    name: string;
    usernmae: string;
    is_deleted: boolean;
    _id: string;
    created_at: string;
};

export type RegisterResponse = {
    data: User;
};
