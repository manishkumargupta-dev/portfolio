import { Navbar } from "./components";
import { Header } from "./containers";
import { About } from "./containers";
import { Work } from "./containers";
import "./App.scss";
function App() {
  return (
    <div className="app">
      <Navbar />
      <Header />
      <About />
      <Work />
    </div>
  );
}

export default App;
