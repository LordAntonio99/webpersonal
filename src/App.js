import { Apis } from "./components/Apis";
import { Hero } from "./components/Hero";
import { Menu } from "./components/Menu";
import { Tecnologias } from "./components/Tecnologias";

function App() {
  return (
    <div className="scroll-smooth">
      <Menu />
        <Hero />
      <Tecnologias />
      <Apis />
    </div>
  );
}

export default App;
