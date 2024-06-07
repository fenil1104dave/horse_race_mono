import { Outlet } from "react-router-dom";
import classes from "./publicLayout.module.scss";

export const PublicLayout = () => {
    return (
        <div className={classes.public_root}>
            <Outlet />
        </div>
    );
};
