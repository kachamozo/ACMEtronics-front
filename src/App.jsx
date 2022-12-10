import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Home from "./Home/Home";
import About from "./components/About/About";
import Shop from "./components/Shop/Shop";
import Detail from "./components/Detail/Detail";
import Carousel from "./components/Carousel/Carousel";

function App() {
  return (
    <div>
      <Navbar />
     
      <Routes>
        <Route path="/home" element={<Home />} />

      </Routes>
    </div>
  );
}

export default App;
