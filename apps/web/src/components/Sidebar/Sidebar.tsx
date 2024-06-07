import { NavLink, useNavigate } from "react-router-dom";
import classes from "./sidebar.module.scss";
import { Button } from "@mui/material";
import { removeTokens } from "../../api/Axios/axiosInstance";

export const Sidebar = () => {
    const navigate = useNavigate();

    const handleLogout = () => {
        removeTokens();
        navigate("/login");
    };
    return (
        <div className={classes.root}>
            <NavLink to="/horses">Horses</NavLink>
            <NavLink to="/races">Races</NavLink>
            <Button onClick={handleLogout}>Logout</Button>
        </div>
    );
};
