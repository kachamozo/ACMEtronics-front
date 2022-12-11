import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Home from "./Home/Home";
import About from "./components/About/About";
import Shop from "./components/Shop/Shop";
import Detail from "./components/Detail/Detail";
import Carousel from "./components/Carousel/Carousel";

import Form from "./components/Form/Form";

import Filter  from "./components/Filter/Filter";


function App() {
  return (
    <div>
      <Navbar />


      <Filter />
     

      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/shop/:id" element={<Detail />} />
        <Route path="/shop/add" element={<Form />} />
      </Routes>
    </div>
  );
}

export default App;
