import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { Horses } from "../pages/Horses";
import { PublicLayout } from "../layouts/publicLayout";
import { PrivateLayout } from "../layouts/privateLayout";
import { Races } from "../pages/Races";
import { Register } from "../pages/Auth/Register";
import { Login } from "../pages/Auth/Login";
import { HorseList } from "../pages/Horses/components/HorseList/HorseList";
import { CreateHorse } from "../pages/Horses/components/CreateHorse";
import { RaceList } from "../pages/Races/components/RaceList";
import { CreateRace } from "../pages/Races/components/CreateRace/CreateRace";

const router = createBrowserRouter([
    {
        path: "/",
        element: <PublicLayout />,
        children: [
            { path: "/register", element: <Register /> },
            { path: "/login", element: <Login /> },
        ],
    },
    {
        path: "/",
        element: <PrivateLayout />,
        children: [
            {
                path: "/horses",
                element: <Horses />,
                children: [
                    { path: "", element: <HorseList /> },
                    { path: "create", element: <CreateHorse /> },
                ],
            },
            {
                path: "/races",
                element: <Races />,
                children: [
                    { path: "", element: <RaceList /> },
                    { path: "create", element: <CreateRace /> },
                ],
            },
        ],
    },
]);

export const AppRouter = () => {
    return <RouterProvider router={router} />;
};
