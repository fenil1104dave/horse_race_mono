import { render, screen } from "@testing-library/react";
import { RaceList } from "./RaceList";
import { SocketProvider } from "../../../../context/SocketContext";

describe("RaceList Component", () => {
    test("renders RaceList component", async () => {
        render(
            <SocketProvider>
                <RaceList />
            </SocketProvider>
        );

        expect(screen.getByText(/Loading/i)).toBeInTheDocument();
    });
});
