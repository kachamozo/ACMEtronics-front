import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { searchName } from '../../redux/actions';
import './Navbar.css';
import logo from '../../Assets/logo1.jpg'
import OrderName from '../Order/OrderA-Z';

// crear un navbar con react-glider con 3 links a las paginas home, shop y about 
// y con un input de busqueda y con un boton de busqueda 
//y con un boton de carrito de compras y con un boton de wishlist y con un boton de login y con un boton de registro 
// y con un boton de menu hamburguesa para dispositivos moviles

function Navbar() {

    const dispatch = useDispatch()
    const [name, setName] = useState('')
   const handleSearch = (e) => {
    dispatch(searchName(e))
    setName(e)
   }
    return ( 
        <div className='nav-bar' >
            <img className='logo' src={logo} alt='logo' width={"100px"} height={"100px"}/>
            <NavLink to="/home">Inicio</NavLink>
            <NavLink to="/shop">Tienda</NavLink>
            <NavLink to="/about">Nosotros</NavLink>
    
        <div className='search-bar'>
              <input
              id='search'
              className="bar-btn"
              name="search"
              placeholder="Buscar..."

              value={name}
              onChange={(e) => handleSearch(e.target.value)}
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
       <OrderName/>
            </div>
    
                
    
        </div>
      );
    } 
    
    
    
    export default Navbar;




    