import Navbar from "./components/Navbar";
import About from "./components/About";
import { Routes, Route } from "react-router-dom";
import Cars from "./components/Cars";
import Booking from "./components/Booking";
import Home from "./components/Home";
import 'rc-slider/assets/index.css';


function App() {
  return (
    <>
      <Navbar title="Car Rental" />

      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/about" element={<About />} />
        <Route path="/cars" element={<Cars />} />
        <Route path="/booking/:id" element={<Booking />} />
      </Routes>
    </>
  );
}

export default App;
