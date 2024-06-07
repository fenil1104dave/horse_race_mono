import React, {
    createContext,
    useContext,
    useEffect,
    useState,
    ReactNode,
} from "react";
import { io, Socket } from "socket.io-client";
import { SocketEventMap } from "../types/SocketEvents";

interface ISocketContext {
    socket: Socket<SocketEventMap> | null;
}

const SocketContext = createContext<ISocketContext>({ socket: null });

export const useSocket = (): ISocketContext => {
    return useContext(SocketContext);
};

interface SocketProviderProps {
    children: ReactNode;
}

export const SocketProvider: React.FC<SocketProviderProps> = ({ children }) => {
    const [socket, setSocket] = useState<Socket | null>(null);

    useEffect(() => {
        const newSocket = io("http://localhost:3000");
        setSocket(newSocket);

        return () => {
            newSocket.close();
        };
    }, []);

    return (
        <SocketContext.Provider value={{ socket }}>
            {children}
        </SocketContext.Provider>
    );
};
