import Hero from "./components/hero";
import Navbar from "./components/navbar";
import About from "./components/about";
import { CheckContextProvider } from "./context/checkContext";

function App() {
  return (
    <CheckContextProvider>
      <Navbar />
      <Hero />
      <About />
    </CheckContextProvider>
  );
}

export default App;
