
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
            <h1>Lista de Artículos</h1>
            </div>

            <div className="section">
                <div className="filter">
                    <h2>Elegir categoría :</h2>
                    <div className="filter-container">
                        <div className="filter-item">
                            <div className="filter-item-container">
                                <div className="filter-item-item">
                                    <input onChange={handleCategory} type="radio" name="category" value='Headphones'/>
                                    <label for="Headphones">Headphones </label><br/>

                                    <input onChange={handleCategory} type="radio" name="category" value="SmartWatch"/>
                                    <label for="SmartWatch"> SmartWatch</label><br/>

                                    <input onChange={handleCategory} type="radio" name="category" value="E-readers"/>
                                    <label for="E-readers"> E-readers</label><br/>

                                    <input onChange={handleCategory} type="radio" name="category" value="Tablets"/>
                                    <label for="Tablets"> Tablets</label><br/>

                                    <input onChange={handleCategory} type="radio" name="category" value="Laptops"/>
                                    <label for="Laptops"> Laptops</label><br/>

                                    <input onChange={handleCategory} type="radio" name="category" value="Smartphones"/>
                                    <label for="Smartphones"> Smartphones</label><br/>
                                    
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