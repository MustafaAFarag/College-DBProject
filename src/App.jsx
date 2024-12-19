import Attributes from "./ui/Attributes";
import ERD from "./ui/ERD";
import Header from "./ui/Header";

export default function App() {
  return (
    <div className="bg-purple-800 min-h-screen justify-center">
      <Header />
      <ERD />
      <Attributes />
    </div>
  );
}
