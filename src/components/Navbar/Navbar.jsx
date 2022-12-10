import React from 'react';
import { NavLink } from 'react-router-dom';
import './Navbar.css';


function Navbar() {
    return ( 
        <div className='nav-bar' >
            <img src=" http://2.bp.blogspot.com/-ZvSCu9_e0Hg/UeZhqLBiDWI/AAAAAAAAC2k/7bK8lY5KwPY/s1600/Imagen1+(1).png" alt='logo' width={"100px"} height={"100px"}/>
            <NavLink to="/home">Home</NavLink>
            <NavLink to="/shop">Shop</NavLink>
            <NavLink to="/about">About</NavLink>
    
        <div className='search-bar'>
              <input
              className="bar-btn"
              name="search"
              placeholder="Search..."
              
            ></input>
            
            <button className="btn" >
              <img src="https://img.icons8.com/ios/50/000000/search--v1.png" width={"30px"} height={"30px"}/>
            </button>
           
            </div>
            
            <div className="cart">
            <button className="btnes" >
                <img src="https://img.icons8.com/ios/50/000000/like--v1.png" width={"30px"} height={"30px"}/>
            </button>
    
            <button className="btnes" >
                <img src="https://img.icons8.com/ios/50/000000/shopping-cart--v1.png" width={"30px"} height={"30px"}/>
            </button>
    
            <button className="btnes" >
                <img src="https://img.icons8.com/ios/50/000000/user--v1.png" width={"30px"} height={"30px"}/>
            </button>
            </div>
    
                
    
        </div>
      );
    } 
    
    
    
    export default Navbar;




    