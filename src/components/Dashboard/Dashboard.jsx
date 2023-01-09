import React from "react";
import "./Dashboard.css";
import { getFavorites, searchName } from "../../redux/actions";
import { useDispatch, useSelector } from "react-redux";
import { useState, useEffect } from "react";

import { Modal, Button } from "react-bootstrap";
import { useAuth0 } from "@auth0/auth0-react";
import { Link } from "react-router-dom";
import EditProfile from "../EditProfile/EditProfile";
import { clearCart, logoutUser } from "../../redux/actions";
import ProfileStatus from "../ProfileStatus/ProfileStatus";
import UsersTable from "../UsersTable/UsersTable";



function Dashboard() {

    const dispatch = useDispatch();
    const [name, setName] = useState("");
    const cart = useSelector((state) => state.cart);
    const allUsers = useSelector((state) => state.allUsers);

    const allCategories = useSelector((state) => state.categories);
    const allProducts = useSelector((state) => state.products);

    const favorites = useSelector((state) => state.favorites);
    let user = JSON.parse(localStorage.getItem("loggedUser"));

    // actualiza el componente para cargar el length del array de favoritos cuando agregamos o eliminamos uno
    useEffect(() => {
        if (user) dispatch(getFavorites(user.email, user.name));
    }, [dispatch]);

    let myFavs =
        favorites["Favorites"] !== undefined ? favorites["Favorites"].length : "0";

    let myCategories =
        allCategories  !== undefined ? allCategories.length : "0";

    let myProducts =
        allProducts !== undefined ? allProducts.length : "0";

    const myUsers =
        allUsers !== undefined ? allUsers.length : "0";

    const [showModal, setShowModal] = useState(false);

      
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
          

         

        
        


         <ProfileStatus showModal={showModal} closeModal={closeModal} />
         

           



       

        

                  





            


          




            
         



      

    

    <div className="container mt-4" >
        <div className="row">
            <div className="col-lg-3 my-lg-0 my-md-1">
                <div id="sidebar" className="bg-purple" style={{backgroundColor:"#319795"}}>
                    <div className="h4 text-white">Account</div>
                    <ul>
                        <li className="active">
                            <a href="#" className="text-decoration-none d-flex align-items-start">
                                <div className="fas fa-box pt-2 me-3"></div>
                                <div className="d-flex flex-column">
                                    <div className="link">My Account</div>
                                    <div className="link-desc">View & Manage orders and returns</div>
                                </div>
                            </a>
                        </li>
                        <li>
                            <a href="#" className="text-decoration-none d-flex align-items-start">
                                <div className="fas fa-box-open pt-2 me-3"></div>
                                <div className="d-flex flex-column">
                                    <div className="link">My Products</div>

                                    <Link to={'/updateproduct/'} style={{fontSize:"12px", color:"white"}} >Edition & Manage of Products</Link>
                                </div>
                            </a>
                        </li>
                        <li>
                            <a href="#" className="text-decoration-none d-flex align-items-start">
                                <div className="far fa-address-book pt-2 me-3"></div>
                                <div className="d-flex flex-column">
                                    <div className="link">Categories Book</div>
                                    
                                    <Link to={'/category/'} style={{fontSize:"12px", color:"white"}} >View & Manage of Categories</Link>
                                     </div>
                            </a>
                        </li>
                        <li>
                            <a href="#" className="text-decoration-none d-flex align-items-start">
                                <div className="far fa-user pt-2 me-3"></div>
                                <div className="d-flex flex-column">
                                    <div className="link" >My Profile
                                    <h6 onClick={()=>{
                                        openModal();
                                    }}
                                    style={{fontSize:"12px"}}>Change your profile details & password 
                                    </h6>
                                </div>
                                </div>
                            </a>
                        </li>
                        <li>
                            <a href="#" className="text-decoration-none d-flex align-items-start">
                                <div className="fas fa-headset pt-2 me-3"></div>
                                <div className="d-flex flex-column">
                                    <div className="link">Reviews</div>
                                    <div className="link-desc">View product reviews</div>
                                </div>
                            </a>
                        </li>

                        <li>
                            <a href="#" className="text-decoration-none d-flex align-items-start">
                                <div className="fas fa-users pt-2 me-3"></div>
                                <div className="d-flex flex-column">
                                    <div className="link">Users</div>
                                    <Link to={'/users/'} style={{fontSize:"12px", color:"white"}} >User list administration</Link>

                                </div>
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
            <div className="col-lg-9 my-lg-0 my-1">
                <div id="main-content" className="bg-white border">
                    <div className="d-flex flex-column">
                        <div className="h5">Hello... 
                        <h6>{ actualUser.data.searchUser.username}</h6>
                        </div>
                        <img
                    src="https://www.soyvisual.org/sites/default/files/styles/twitter_card/public/images/photos/jue_0023-p.jpg?itok=rIHptSTm" style={{width:"60px", height:"60px"}}
                    alt="profile-img"
                    className="profile-img-card"
                    />
                        <h6>{actualUser.data.searchUser.firstname}</h6>
                        <h6>{actualUser.data.searchUser.lastname}</h6>
                        <div>Logged in as: 
                            <h6>{actualUser.data.searchUser.email}</h6> </div>
                    </div>





                    <div className="d-flex my-4 flex-wrap" style={{justifyContent:"space-around"}}>
                        <div className="box me-4 my-1 bg-light">
                            <img src="https://www.freepnglogos.com/uploads/box-png/cardboard-box-brown-vector-graphic-pixabay-2.png"
                                alt=""/>
                            <div className="d-flex align-items-center mt-2">
                                <div className="tag">Orders placed</div>
                                <div className="ms-auto number">10</div>
                            </div>
                        </div>
                        <div className="box me-4 my-1 bg-light">
                            <img src="https://www.freepnglogos.com/uploads/shopping-cart-png/shopping-cart-campus-recreation-university-nebraska-lincoln-30.png"
                                alt=""/>
                            <div className="d-flex align-items-center mt-2">
                                <div className="tag">Items in Cart</div>
                                <div className="ms-auto number">
                                <p>{cart.length}</p>
                                </div>
                            </div>
                        </div>
                        <div className="box me-4 my-1 bg-light">
                            <img src="https://www.freepnglogos.com/uploads/love-png/love-png-heart-symbol-wikipedia-11.png"
                                alt=""/>
                            <div className="d-flex align-items-center mt-2">
                                <div className="tag">Wishlist</div>
                                <div className="ms-auto number">
                                <p>{myFavs}</p>
                                </div>
                            </div>
                        </div>
                    </div> 

                        <div className="d-flex my-4 flex-wrap" style={{justifyContent:"space-around"}}>
                            <div className="box me-4 my-1 bg-light">
                            <img src="https://e7.pngegg.com/pngimages/522/207/png-clipart-profile-icon-computer-icons-business-management-social-media-service-people-icon-blue-company.png"
                                alt=""/>
                            <div className="d-flex align-items-center mt-2">
                                <div className="tag" style={{marginTop:"20px"}}>Total Users</div>
                                <Link to={'/users/'} style={{fontSize:"12px", color:"black", marginTop:"20px"}} >Click for details</Link>
                                <div className="ms-auto number">
                                <p>{myUsers}</p>
                                </div> 
                            </div> 
                        </div> 
                        
                        <div className="box me-4 my-1 bg-light">
                            <img src="https://e7.pngegg.com/pngimages/252/907/png-clipart-infographic-circle-icon-circles-and-triangles-infographics-ppt-01-05-text-blue-angle.png"
                                alt=""/>
                            <div className="d-flex align-items-center mt-2">
                            <div className="tag" style={{marginTop:"20px"}}>Category</div>
                                <Link to={'/category/'} style={{fontSize:"12px", color:"black", marginTop:"20px"}} >Click for details</Link>
                                <div className="ms-auto number">
                                <p>{myCategories}</p>


                                </div>
                            </div>
                        </div>
                        <div className="box me-4 my-1 bg-light">
                            <img src="https://e7.pngegg.com/pngimages/485/1000/png-clipart-brown-cardboard-boxes-paper-mover-box-packaging-and-labeling-box-miscellaneous-freight-transport.png"
                                alt=""/>
                            <div className="d-flex align-items-center mt-2">
                            <div className="tag" style={{marginTop:"20px"}}>Products</div>
                                <Link to={'/updateproduct/'} style={{fontSize:"12px", color:"black", marginTop:"20px"}} >Click for details</Link>

                                <div className="ms-auto number">
                                <p>{myProducts}</p>
                                </div>
                            </div>
                        </div>


                        
                        {/*
                        <div className="d-flex my-4 flex-wrap" >
                            

                    <div className="text-uppercase">My recent orders</div>
                    <div className="order my-3 bg-light">
                        <div className="row">
                            <div className="col-lg-4">
                                <div className="d-flex flex-column justify-content-between order-summary">
                                    <div className="d-flex align-items-center">
                                        <div className="text-uppercase">Order #Example...0001</div>
                                        <div className="blue-label ms-auto text-uppercase">paid</div>
                                    </div>
                                    
                                    <div className="rating d-flex align-items-center pt-1">
                                        <img src="https://www.freepnglogos.com/uploads/like-png/like-png-hand-thumb-sign-vector-graphic-pixabay-39.png"
                                            alt=""/><span className="px-2">Rating:</span>
                                        <span className="fas fa-star"></span>
                                        <span className="fas fa-star"></span>
                                        <span className="fas fa-star"></span>
                                        <span className="fas fa-star"></span>
                                        <span className="far fa-star"></span>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-8">
                                <div className="d-sm-flex align-items-sm-start justify-content-sm-between">
                                    <div className="status">Status : Delivered</div>
                                    <div className="btn btn-primary text-uppercase">order info</div>
                                </div>
                                <div className="progressbar-track">
                                    <ul className="progressbar">
                                        <li id="step-1" className="text-muted green">
                                            <span className="fas fa-gift"></span>
                                        </li>
                                        <li id="step-2" className="text-muted green">
                                            <span className="fas fa-check"></span>
                                        </li>
                                        <li id="step-3" className="text-muted green">
                                            <span className="fas fa-box"></span>
                                        </li>
                                        <li id="step-4" className="text-muted green">
                                            <span className="fas fa-truck"></span>
                                        </li>
                                        <li id="step-5" className="text-muted green">
                                            <span className="fas fa-box-open"></span>
                                        </li>
                                    </ul>
                                    <div id="tracker"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="order my-3 bg-light">
                        <div className="row">
                            <div className="col-lg-4">
                                <div className="d-flex flex-column justify-content-between order-summary">
                                    <div className="d-flex align-items-center">
                                        <div className="text-uppercase">Order #Example...0001</div>
                                        <div className="green-label ms-auto text-uppercase">cod</div>
                                    </div>
                                   
                                    <div className="rating d-flex align-items-center pt-1">
                                        <img src="https://www.freepnglogos.com/uploads/like-png/like-png-hand-thumb-sign-vector-graphic-pixabay-39.png"
                                            alt=""/><span className="px-2">Rating:</span>
                                        <span className="fas fa-star"></span>
                                        <span className="fas fa-star"></span>
                                        <span className="fas fa-star"></span>
                                        <span className="fas fa-star"></span>
                                        <span className="far fa-star"></span>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-8">
                                <div className="d-sm-flex align-items-sm-start justify-content-sm-between">
                                    <div className="status">Status : Delivered</div>
                                    <div className="btn btn-primary text-uppercase">order info</div>
                                </div>
                                <div className="progressbar-track">
                                    <ul className="progressbar">
                                        <li id="step-1" className="text-muted green">
                                            <span className="fas fa-gift"></span>
                                        </li>
                                        <li id="step-2" className="text-muted">
                                            <span className="fas fa-check"></span>
                                        </li>
                                        <li id="step-3" className="text-muted">
                                            <span className="fas fa-box"></span>
                                        </li>
                                        <li id="step-4" className="text-muted">
                                            <span className="fas fa-truck"></span>
                                        </li>
                                        <li id="step-5" className="text-muted">
                                            <span className="fas fa-box-open"></span>
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
</div>
                    </div> */}
                </div>
            </div>
        </div>
    </div>
</div>
</div>



    )
}

export default Dashboard;
