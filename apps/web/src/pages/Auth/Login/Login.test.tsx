import { render, screen, fireEvent } from "@testing-library/react";
import { Login } from "./Login";
import { BrowserRouter } from "react-router-dom";

describe("Login Component", () => {
    test("renders login form", async () => {
        render(
            <BrowserRouter>
                <Login />
            </BrowserRouter>
        );

        expect(screen.getByPlaceholderText("Username")).toBeInTheDocument();
        expect(screen.getByPlaceholderText("Password")).toBeInTheDocument();
        expect(
            await screen.getByRole("button", { name: "Login" })
        ).toBeInTheDocument();
    });

    test("submits form with valid data", () => {
        render(
            <BrowserRouter>
                <Login />
            </BrowserRouter>
        );

        fireEvent.change(screen.getByPlaceholderText("Username"), {
            target: { value: "fenild" },
        });
        fireEvent.change(screen.getByPlaceholderText("Password"), {
            target: { value: "password" },
        });
    });
});
