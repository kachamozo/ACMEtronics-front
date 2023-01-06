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
import Login from "./components/Login/Login";
import SignUp from "./components/SignUp/SignUp";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Reviews from "./components/Reviews/Reviews";
import PrivateRoute from "./components/PrivateRoute";
import { useSelector } from "react-redux";
import Stripe from "./components/Stripe/Stripe";
import EditProfile from "./components/EditProfile/EditProfile";

import Dashboard from "./components/Dashboard/Dashboard";
import UpdateCategory from "./components/CategoryTable/Category.jsx";

function App() {
  const user = useSelector((state) => state.user);

  const isAuthenticated = !!user.name;

  return (
    <div>
      <Navbar />

      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/shop/:id" element={<Detail />} />
        <Route path="/form" element={<Form />} />
        <Route path="/shop/filter" element={<Filter />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/shop/cart" element={<Cart />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/reviews" element={<Reviews />} />

        <Route path="/wishlist" element={<WishList />} />

        <Route path="/stripe" element={<Stripe />} />

        <Route path="/updateproduct" element={<UpdateProduct />} />

        <Route path="/editprofile" element={<EditProfile />} />
        <Route path="/category" element={<UpdateCategory />} />

        {/* <Route
          path="/createproduct/*"
          element={
            <PrivateRoute isAuthenticated={isAuthenticated && user.admin}>
              <Form />
            </PrivateRoute>
          }
        /> */}

        {/* <Route
          path="/updateproduct"
          element={
            <PrivateRoute user={actualUser.admin}>
              <UpdateProduct />
            </PrivateRoute>
          } 
        /> */}

        {/* <PrivateRoute
          path="/updateproduct"
          component={UpdateProduct}
          isAllowed={actualUser.admn}
        /> */}
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
