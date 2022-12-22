import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Home from "./Home/Home";
import About from "./components/About/About";
import Shop from "./components/Shop/Shop";
import Detail from "./components/Detail/Detail";
import Filter from "./components/Filter/Filter";
import Form from "./components/Form/Form";
import UpdateProduct from "./components/UpdateProductForm/UpdateProduct";
import WishList from "./components/WishList/WishList.jsx";
import Footer from "./components/Footer/Footer";
import Landing from "./components/Landing/Landing";
import Cart from "./components/Cart/Cart";
import Stripe from "./components/Stripe/Stripe";

function App() {
  return (
    <div>
      <Navbar/>
 <Routes>  
        <Route path="/" element={<Landing />} />
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/shop/:id" element={<Detail />} />
        <Route path="/shop/form" element={<Form />} />
        <Route path="/shop/filter" element={<Filter />} />
        <Route path="/shop/updateproduct" element={<UpdateProduct />} />
        <Route path="/home/wishList" element={<WishList />} />
        <Route path="/shop/cart" element={<Cart />} />
        <Route path="/shop/stripe" element={<Stripe />} />
      </Routes>
<Footer/>
    </div>
  );
}

export default App;
