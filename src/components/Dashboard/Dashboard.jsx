import React from "react";
import "./Dashboard.css";
import { getFavorites, searchName } from "../../redux/actions";
import { useDispatch, useSelector } from "react-redux";
import { useState, useEffect } from "react";

import { Modal, Button } from "react-bootstrap";
// import "./ProfileStatus.css";
import { useAuth0 } from "@auth0/auth0-react";
import { Link } from "react-router-dom";
import EditProfile from "../EditProfile/EditProfile";
import { clearCart, logoutUser } from "../../redux/actions";
import ProfileStatus from "../ProfileStatus/ProfileStatus";



function Dashboard() {

    const dispatch = useDispatch();
    const [name, setName] = useState("");
    const cart = useSelector((state) => state.cart);
    const favorites = useSelector((state) => state.favorites);
    let user = JSON.parse(localStorage.getItem("loggedUser"));

    // actualiza el componente para cargar el length del array de favoritos cuando agregamos o eliminamos uno
    useEffect(() => {
        if (user) dispatch(getFavorites(user.email, user.name));
    }, [dispatch]);

    let myFavs =
        favorites["Favorites"] !== undefined ? favorites["Favorites"].length : "0";






        const [showModal, setShowModal] = useState(false);

        //   const { isAuthenticated } = useAuth0();
      
        const handleSearch = (e) => {
          dispatch(searchName(e));
          setName(e);
        };
      
        const openModal = () => {
          setShowModal(true);
        };
      
        const closeModal = () => {
          setShowModal(false);
        };   
        
        


        const actualUser = useSelector((state) => state.user);
        useEffect(() => {
          localStorage.setItem("user", JSON.stringify(actualUser));
        },[actualUser])



        



    

    return (
        <div className="container">






          


                  





            


          




            
         



      

    

    <div class="container mt-4" >
        <div class="row">
            <div class="col-lg-3 my-lg-0 my-md-1">
                <div id="sidebar" class="bg-purple" style={{backgroundColor:"#319795"}}>
                    <div class="h4 text-white">Account</div>
                    <ul>
                        <li class="active">
                            <a href="#" class="text-decoration-none d-flex align-items-start">
                                <div class="fas fa-box pt-2 me-3"></div>
                                <div class="d-flex flex-column">
                                    <div class="link">My Account</div>
                                    <div class="link-desc">View & Manage orders and returns</div>
                                </div>
                            </a>
                        </li>
                        <li>
                            <a href="#" class="text-decoration-none d-flex align-items-start">
                                <div class="fas fa-box-open pt-2 me-3"></div>
                                <div class="d-flex flex-column">
                                    <div class="link">My Orders</div>
                                    <div class="link-desc">View & Manage orders and returns</div>
                                </div>
                            </a>
                        </li>
                        <li>
                            <a href="#" class="text-decoration-none d-flex align-items-start">
                                <div class="far fa-address-book pt-2 me-3"></div>
                                <div class="d-flex flex-column">
                                    <div class="link">Address Book</div>
                                    <div class="link-desc">View & Manage Addresses</div>
                                </div>
                            </a>
                        </li>
                        <li>
                            <a href="#" class="text-decoration-none d-flex align-items-start">
                                <div class="far fa-user pt-2 me-3"></div>
                                <div class="d-flex flex-column">
                                    <div class="link">My Profile</div>
                                    <div class="link-desc">Change your profile details & password</div>
                                </div>
                            </a>
                        </li>
                        <li>
                            <a href="#" class="text-decoration-none d-flex align-items-start">
                                <div class="fas fa-headset pt-2 me-3"></div>
                                <div class="d-flex flex-column">
                                    <div class="link">Reviews</div>
                                    <div class="link-desc">View product reviews</div>
                                </div>
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
            <div class="col-lg-9 my-lg-0 my-1">
                <div id="main-content" class="bg-white border">
                    <div class="d-flex flex-column">
                        <div className="h5">Hello, <p>{user.name}</p></div>
                        <img
                    src="//ssl.gstatic.com/accounts/ui/avatar_2x.png" style={{width:"60px", height:"60px"}}
                    alt="profile-img"
                    className="profile-img-card"
                    />
                        <h6>{actualUser.data.searchUser.firstname}</h6>
                        <h6>{actualUser.data.searchUser.lastname}</h6>
                        <div>Logged in as: <p>{actualUser.data.searchUser.email}</p> </div>
                    </div>
                    <div class="d-flex my-4 flex-wrap" style={{justifyContent:"space-around"}}>
                        <div class="box me-4 my-1 bg-light">
                            <img src="https://www.freepnglogos.com/uploads/box-png/cardboard-box-brown-vector-graphic-pixabay-2.png"
                                alt=""/>
                            <div class="d-flex align-items-center mt-2">
                                <div class="tag">Orders placed</div>
                                <div class="ms-auto number">10</div>
                            </div>
                        </div>
                        <div class="box me-4 my-1 bg-light">
                            <img src="https://www.freepnglogos.com/uploads/shopping-cart-png/shopping-cart-campus-recreation-university-nebraska-lincoln-30.png"
                                alt=""/>
                            <div class="d-flex align-items-center mt-2">
                                <div class="tag">Items in Cart</div>
                                <div class="ms-auto number">
                                <p>{cart.length}</p>
                                </div>
                            </div>
                        </div>
                        <div class="box me-4 my-1 bg-light">
                            <img src="https://www.freepnglogos.com/uploads/love-png/love-png-heart-symbol-wikipedia-11.png"
                                alt=""/>
                            <div class="d-flex align-items-center mt-2">
                                <div class="tag">Wishlist</div>
                                <div class="ms-auto number">
                                <p>{myFavs}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="text-uppercase">My recent orders</div>
                    <div class="order my-3 bg-light">
                        <div class="row">
                            <div class="col-lg-4">
                                <div class="d-flex flex-column justify-content-between order-summary">
                                    <div class="d-flex align-items-center">
                                        <div class="text-uppercase">Order #Example...0001</div>
                                        <div class="blue-label ms-auto text-uppercase">paid</div>
                                    </div>
                                    
                                    <div class="rating d-flex align-items-center pt-1">
                                        <img src="https://www.freepnglogos.com/uploads/like-png/like-png-hand-thumb-sign-vector-graphic-pixabay-39.png"
                                            alt=""/><span class="px-2">Rating:</span>
                                        <span class="fas fa-star"></span>
                                        <span class="fas fa-star"></span>
                                        <span class="fas fa-star"></span>
                                        <span class="fas fa-star"></span>
                                        <span class="far fa-star"></span>
                                    </div>
                                </div>
                            </div>
                            <div class="col-lg-8">
                                <div class="d-sm-flex align-items-sm-start justify-content-sm-between">
                                    <div class="status">Status : Delivered</div>
                                    <div class="btn btn-primary text-uppercase">order info</div>
                                </div>
                                <div class="progressbar-track">
                                    <ul class="progressbar">
                                        <li id="step-1" class="text-muted green">
                                            <span class="fas fa-gift"></span>
                                        </li>
                                        <li id="step-2" class="text-muted green">
                                            <span class="fas fa-check"></span>
                                        </li>
                                        <li id="step-3" class="text-muted green">
                                            <span class="fas fa-box"></span>
                                        </li>
                                        <li id="step-4" class="text-muted green">
                                            <span class="fas fa-truck"></span>
                                        </li>
                                        <li id="step-5" class="text-muted green">
                                            <span class="fas fa-box-open"></span>
                                        </li>
                                    </ul>
                                    <div id="tracker"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="order my-3 bg-light">
                        <div class="row">
                            <div class="col-lg-4">
                                <div class="d-flex flex-column justify-content-between order-summary">
                                    <div class="d-flex align-items-center">
                                        <div class="text-uppercase">Order #Example...0001</div>
                                        <div class="green-label ms-auto text-uppercase">cod</div>
                                    </div>
                                   
                                    <div class="rating d-flex align-items-center pt-1">
                                        <img src="https://www.freepnglogos.com/uploads/like-png/like-png-hand-thumb-sign-vector-graphic-pixabay-39.png"
                                            alt=""/><span class="px-2">Rating:</span>
                                        <span class="fas fa-star"></span>
                                        <span class="fas fa-star"></span>
                                        <span class="fas fa-star"></span>
                                        <span class="fas fa-star"></span>
                                        <span class="far fa-star"></span>
                                    </div>
                                </div>
                            </div>
                            <div class="col-lg-8">
                                <div class="d-sm-flex align-items-sm-start justify-content-sm-between">
                                    <div class="status">Status : Delivered</div>
                                    <div class="btn btn-primary text-uppercase">order info</div>
                                </div>
                                <div class="progressbar-track">
                                    <ul class="progressbar">
                                        <li id="step-1" class="text-muted green">
                                            <span class="fas fa-gift"></span>
                                        </li>
                                        <li id="step-2" class="text-muted">
                                            <span class="fas fa-check"></span>
                                        </li>
                                        <li id="step-3" class="text-muted">
                                            <span class="fas fa-box"></span>
                                        </li>
                                        <li id="step-4" class="text-muted">
                                            <span class="fas fa-truck"></span>
                                        </li>
                                        <li id="step-5" class="text-muted">
                                            <span class="fas fa-box-open"></span>
                                        </li>
                                    </ul>
                                    <div id="tracker"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>

</div>
    )
}

export default Dashboard;
