import { Controller, useForm } from "react-hook-form";
import classes from "./register.module.scss";
import { CommonInput } from "../../../components/Input";
import { CommonButton } from "../../../components/Button";
import { Typography } from "@mui/material";
import { RegisterBody } from "../../../api/auth/types";
import { NavLink, useNavigate } from "react-router-dom";
import { register } from "../../../api/auth/authAPI";

type RegisterForm = RegisterBody & { confirmPassword: string };

export const Register = () => {
    const navigate = useNavigate();
    const {
        control,
        handleSubmit,
        setError,
        formState: { errors },
    } = useForm<RegisterForm>({
        defaultValues: {
            name: "",
            username: "",
            password: "",
            confirmPassword: "",
        },
    });

    const onSubmit = (data: RegisterForm) => {
        const { name, username, password, confirmPassword } = data;

        if (password !== confirmPassword) {
            setError("confirmPassword", {
                type: "custom",
                message: "Password and confirm password should be same.",
            });
            return;
        }

        register({ name, username, password })
            .then((res) => {
                if (res.data._id) {
                    navigate("/login");
                }
            })
            .catch(({ response }) => {
                setError("confirmPassword", {
                    type: "custom",
                    message: response.data.error,
                });
            });
    };
    return (
        <div className={classes.root}>
            <div className={classes.formContainer}>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <Typography align="center" variant="h4">
                        Register
                    </Typography>
                    <Controller
                        name="name"
                        control={control}
                        render={({ field }) => (
                            <CommonInput placeholder="Name" {...field} />
                        )}
                    />
                    <Controller
                        name="username"
                        control={control}
                        render={({ field }) => (
                            <CommonInput placeholder="Username" {...field} />
                        )}
                    />
                    <Controller
                        name="password"
                        control={control}
                        render={({ field }) => (
                            <CommonInput
                                placeholder="Password"
                                type="password"
                                {...field}
                            />
                        )}
                    />
                    <Controller
                        name="confirmPassword"
                        control={control}
                        render={({ field }) => (
                            <CommonInput
                                placeholder="Confirm Password"
                                type="password"
                                {...field}
                            />
                        )}
                    />
                    {errors.confirmPassword && (
                        <Typography color="red">
                            {errors.confirmPassword.message}
                        </Typography>
                    )}
                    <CommonButton variant="contained" type="submit">
                        Register
                    </CommonButton>
                </form>
            </div>
            <NavLink to="/login">Already have an account?</NavLink>
        </div>
    );
};
