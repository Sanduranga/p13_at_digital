import "./App.css";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Intro from "./components/Intro";
import Navbar from "./components/Navbar";

function App() {
  return (
    <div className=" overflow-x-hidden">
      <Navbar />
      <Header />
      <Intro />
      <Footer />
    </div>
  );
}

export default App;
