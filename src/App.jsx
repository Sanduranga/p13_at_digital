import "./App.css";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Intro from "./components/Intro";
import { NavProvider } from "./components/NavContext";
import Navbar from "./components/Navbar";

function App() {
  return (
    <div className=" overflow-x-hidden">
      <NavProvider>
        <Navbar />
        <Header />
        <Intro />
        <Footer />
      </NavProvider>
    </div>
  );
}

export default App;
