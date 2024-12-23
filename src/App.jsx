import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import Attributes from "./ui/Attributes";
import ERD from "./ui/ERD";
import Header from "./ui/Header";
import Implemention from "./ui/Implemention";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import Schema from "./ui/Schema";

const queryClient = new QueryClient();

export default function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <div className="bg-purple-800 min-h-screen justify-center">
        <Header />
        <ERD />
        <Schema />
        <Attributes />
        <Implemention />
      </div>
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  );
}
