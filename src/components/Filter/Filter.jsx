import React from "react";
import { useDispatch } from "react-redux";
import { filterCategory } from "../../redux/actions";
import "./Filter.css";


function Filter() {
    const dispatch = useDispatch()
    
    const handleCategory = (e) => {
        e.preventDefault()
        dispatch(filterCategory(e.target.value))
    }
    return(
        <div className="componentContainer">
            <div className="textini">
            <h1>List of Products</h1>
            </div>

            <div className="section">
                <div className="filter">
                    <h2>Choose category :</h2>
                    <div className="filter-container">
                        <div className="filter-item">
                            <div className="filter-item-container">
                                <div className="filter-item-item">
                                    <input type="radio" name="category" value="all" onChange={handleCategory}></input>
                                    <label for="All">All</label>
                                    
                                    <input onChange={handleCategory} type="radio" name="category" value='Headphones'/>
                                    <label htmlFor="Headphones">Headphones </label>

                                    <input onChange={handleCategory} type="radio" name="category" value="SmartWatch"/>
                                    <label htmlFor="SmartWatch"> SmartWatch</label>

                                    <input onChange={handleCategory} type="radio" name="category" value="E-readers"/>
                                    <label htmlFor="E-readers"> E-readers</label>

                                    <input onChange={handleCategory} type="radio" name="category" value="Tablets"/>
                                    <label htmlFor="Tablets"> Tablets</label>

                                    <input onChange={handleCategory} type="radio" name="category" value="Laptops"/>
                                    <label htmlFor="Laptops"> Laptops</label>

                                    <input onChange={handleCategory} type="radio" name="category" value="Smartphones"/>
                                    <label htmlFor="Smartphones"> Smartphones</label>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )

}

export default Filter