import { Race } from "../api/race/types";

export type GetRacesMessage = {
    type: "GET_RACES";
};

export type DisconnectRacesMessage = {
    type: "DISCONNECT_RACES";
};

export type RaceSocketMessage = GetRacesMessage | DisconnectRacesMessage;

export type SocketResponse<T, K> = {
    type: T;
    data: K[];
};

export interface SocketEventMap {
    raceMessage: (arg: { data?: Race[] | null; type: string }) => void;
}
