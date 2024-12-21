import Attributes from "./ui/Attributes";
import ERD from "./ui/ERD";
import Header from "./ui/Header";
import Implemention from "./ui/Implemention";

export default function App() {
  return (
    <div className="bg-purple-800 min-h-screen justify-center">
      <Header />
      <ERD />
      <Attributes />
      <Implemention />
    </div>
  );
}
