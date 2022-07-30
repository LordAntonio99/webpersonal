import { Apis } from "./components/Apis";
import { Footer } from "./components/Footer";
import { Hero } from "./components/Hero";
import { Menu } from "./components/Menu";
import { Tecnologias } from "./components/Tecnologias";
import { Webs } from "./components/Webs";

function App() {
  return (
    <div className="scroll-smooth">
      <Menu />
      <Hero />
      <Tecnologias />
      <Apis />
      <Webs />
      <Footer />
    </div>
  );
}

export default App;
