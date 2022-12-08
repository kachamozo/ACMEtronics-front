import React from 'react';
import { NavLink } from 'react-router-dom';
import { makeStyles, useMediaQuery } from '@material-ui/core';
import { Button } from '@material-ui/core';
const useStyles = makeStyles((theme) => ({
  
  nav: {
    display: 'flex',
    justifyContent: 'space-around',
    alignItems: 'center',
    border: '2px solid #319795',
    fontFamily:'Raleway',
    fontStyle: 'normal',
    fontWeight: 'bold',
    fontSize: '20px',
    width: '100%',
    color: '#319795',
    backgroundColor: 'white',
    height: '100px',
    boxShadow: '0 0 10px 0 rgba(0, 0, 0, 0.1)',
    position: 'fixed',
    top: 1,
    left: 0,
    right: 0,
    zIndex: 1,
  },

  search: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '30%',
    height: '40px',
    boxShadow: '0 0 10px 0 rgba(0, 0, 0, 0.1)',
    color: 'bisque',
    fontFamily:'Raleway',
    fontSize: '20px',
    fontWeight: 'bold',  
    
  },

  btn:{
    border:'2px solid #319795',
    backgroundColor: '#319795',
    color: 'white',
    borderRadius: '10px',
    width: '30px',
    height: '50px',
  }
  ,cart:{
    display: 'flex',
    justifyContent: 'space-around',
    alignItems: 'center',
    width: '10%',
    height: '60px',
    borderRadius: '20px',
    fontFamily:'Raleway',
  }

  ,btnes:{
    display: 'flex',
    justifyContent: 'space-around',
    alignItems: 'center',
    width: '30%',
    height: '50px',
    borderRadius: '10px',
    border:'2px solid #319795',
    backgroundColor: '#319795',
    fontFamily:'Raleway',
    margin: '2px',
  }

  ,bar:{
    border:'2px solid #319795',
    backgroundColor: 'white',
    color: '#319795',
    borderRadius: '10px',
    width: '80%',
    height: '40px',
    fontFamily:'Raleway',
    fontSize: '20px',
    fontWeight: 'bold',
    marginLeft: '10px',
  }

}));

const Navbar = () => {
  const classes = useStyles();

 return (
   
    <div className={classes.nav} >
        <img src=" http://2.bp.blogspot.com/-ZvSCu9_e0Hg/UeZhqLBiDWI/AAAAAAAAC2k/7bK8lY5KwPY/s1600/Imagen1+(1).png" alt='logo' width={"100px"} height={"100px"} />
        <NavLink to="/home">Home</NavLink>
        <NavLink to="/shop">Shop</NavLink>
        <NavLink to="/about">About</NavLink> 
   
    <div className={classes.search}>
        <input
          className={classes.bar}
          name="search"
          placeholder="Search..." 
        />
        
        <Button className={classes.btn} >
          <img src="https://img.icons8.com/ios/50/000000/search--v1.png" width="40px" height="40px" />
        </Button>
       
        </div>
        <div className={classes.cart}>
        <Button className={classes.btnes} >
            <img src="https://img.icons8.com/ios/50/000000/like--v1.png" width="40px" height="40px"/>
        </Button>

        <Button className={classes.btnes} >
            <img src="https://img.icons8.com/ios/50/000000/shopping-cart--v1.png" width="40px" height="40px" />
        </Button>

        <Button className={classes.btnes}>
            <img src="https://img.icons8.com/ios/50/000000/user--v1.png" width="40px" height="40px" />
        </Button>
        </div>  
    
    </div>
   
  ); 
};

export default Navbar;