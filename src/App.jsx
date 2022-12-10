import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import Shop from "./components/Shop";
import Detail from "./components/Detail/Detail";
import Carousel from "./components/Carousel/Carousel";

function App() {
  return (
    <div>
      <Navbar />
     
      <Routes>
        <Route path="/home" element={<Home />} />
		<Route path="/about" element={<About />} />
		<Route path="/shop" element={<Shop />} />
		<Route path="/shop/:id" element={<Detail />} />
    <Route path="/" element={<Carousel />} />
      </Routes>
    </div>
  );
}

export default App;
