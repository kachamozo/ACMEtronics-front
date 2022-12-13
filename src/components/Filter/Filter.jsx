import React from "react";
import "./Filter.css";


function Filter() {

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
                                    <input type="checkbox" id="vehicle1" name="vehicle1" value="Bike"/>
                                    <label for="vehicle1">Headphones </label><br/>

                                    <input type="checkbox" id="vehicle2" name="vehicle2" value="Car"/>
                                    <label for="vehicle2"> SmartWatch</label><br/>

                                    <input type="checkbox" id="vehicle3" name="vehicle3" value="Boat"/>
                                    <label for="vehicle3"> E-readers</label><br/>

                                    <input type="checkbox" id="vehicle3" name="vehicle3" value="Boat"/>
                                    <label for="vehicle3"> Tablets</label><br/>

                                    <input type="checkbox" id="vehicle3" name="vehicle3" value="Boat"/>
                                    <label for="vehicle3"> Laptops</label><br/>

                                    <input type="checkbox" id="vehicle3" name="vehicle3" value="Boat"/>
                                    <label for="vehicle3"> Smartphones</label><br/>
                                    
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