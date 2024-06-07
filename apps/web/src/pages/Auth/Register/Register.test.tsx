import { render, screen, fireEvent } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import { Register } from "./Register";

describe("Register Component", () => {
    test("renders login form", async () => {
        render(
            <BrowserRouter>
                <Register />
            </BrowserRouter>
        );

        expect(screen.getByPlaceholderText("Username")).toBeInTheDocument();
        expect(screen.getByPlaceholderText("Password")).toBeInTheDocument();
        expect(
            screen.getByPlaceholderText("Confirm Password")
        ).toBeInTheDocument();
        expect(screen.getByPlaceholderText("Name")).toBeInTheDocument();

        expect(
            await screen.getByRole("button", { name: "Register" })
        ).toBeInTheDocument();
    });

    test("submits form with valid data", () => {
        render(
            <BrowserRouter>
                <Register />
            </BrowserRouter>
        );

        fireEvent.change(screen.getByPlaceholderText("Username"), {
            target: { value: "fenild" },
        });
        fireEvent.change(screen.getByPlaceholderText("Password"), {
            target: { value: "password" },
        });
        fireEvent.change(screen.getByPlaceholderText("Confirm Password"), {
            target: { value: "password" },
        });
        fireEvent.change(screen.getByPlaceholderText("Name"), {
            target: { value: "name" },
        });
    });
});
