import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { AppRouter } from "./routes";
import { SocketProvider } from "./context/SocketContext";

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <SocketProvider>
        <AppRouter />
      </SocketProvider>
    </QueryClientProvider>
  );
}

export default App;
