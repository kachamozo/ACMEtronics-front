import React from 'react';
import { useDispatch } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { searchName } from '../../redux/actions';
import './Navbar.css';


// crear un navbar con react-glider con 3 links a las paginas home, shop y about 
// y con un input de busqueda y con un boton de busqueda 
//y con un boton de carrito de compras y con un boton de wishlist y con un boton de login y con un boton de registro 
// y con un boton de menu hamburguesa para dispositivos moviles

function Navbar() {

    const dispatch = useDispatch()
   const handleSearch = (e) => {
    dispatch(searchName(e))
   }
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




    