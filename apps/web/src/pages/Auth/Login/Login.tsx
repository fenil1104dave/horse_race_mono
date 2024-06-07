import { Controller, useForm } from "react-hook-form";
import classes from "./login.module.scss";
import { CommonInput } from "../../../components/Input";
import { CommonButton } from "../../../components/Button";
import { Typography } from "@mui/material";
import { LoginBody } from "../../../api/auth/types";
import { login } from "../../../api/auth/authAPI";
import { setTokens } from "../../../api/Axios/axiosInstance";
import { NavLink, useNavigate } from "react-router-dom";

type LoginForm = LoginBody;

export const Login = () => {
    const navigate = useNavigate();
    const {
        control,
        handleSubmit,
        setError,
        formState: { errors },
    } = useForm<LoginForm>({
        defaultValues: {
            username: "",
            password: "",
        },
    });

    const onSubmit = (data: LoginForm) => {
        login(data)
            .then((res) => {
                setTokens(res.token, res.refreshToken);
                navigate("/horses");
            })
            .catch(() => {
                setError("password", {
                    type: "custom",
                    message: "Invalid Username or Password",
                });
            });
    };
    return (
        <div className={classes.root}>
            <div className={classes.formContainer}>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <Typography align="center" variant="h4">
                        Login
                    </Typography>
                    <Controller
                        name="username"
                        control={control}
                        rules={{ required: true }}
                        render={({ field }) => (
                            <CommonInput placeholder="Username" {...field} />
                        )}
                    />
                    <Controller
                        name="password"
                        control={control}
                        rules={{ required: true }}
                        render={({ field }) => (
                            <CommonInput
                                placeholder="Password"
                                type="password"
                                {...field}
                            />
                        )}
                    />
                    {errors.password && (
                        <Typography color="red">
                            {errors.password.message}
                        </Typography>
                    )}
                    <CommonButton variant="contained" type="submit">
                        Login
                    </CommonButton>
                </form>
            </div>
            <NavLink to="/register">Need New account?</NavLink>
        </div>
    );
};
