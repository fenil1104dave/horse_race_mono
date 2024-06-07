import { Outlet } from "react-router-dom";
import { Sidebar } from "../../components/Sidebar/Sidebar";
import classes from "./privateLayout.module.scss";

export const PrivateLayout = () => {
    return (
        <div className={classes.root}>
            <Sidebar />
            <div className={classes.container}>
                <Outlet />
            </div>
        </div>
    );
};
