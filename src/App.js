import Navbar from "./components/Navbar";
import About from "./components/About";
import Home from "./components/home";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <Navbar title="Car Rental" />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </>
  );
}

export default App;
