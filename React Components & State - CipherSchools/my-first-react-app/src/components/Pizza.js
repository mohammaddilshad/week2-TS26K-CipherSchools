import React from 'react';
import './pizza.css';

// Functional Component
// Capital Letter naming convention

let Pizza = (props) => {
    console.log("I am coming from App.js", props);

    let pizzaPlacesList = props.pizzaPlaces.map((pizzaPlace) => {
        console.log(pizzaPlace);
        return (
            <div class='pizza'>
                <h1>{pizzaPlace.name.toUpperCase()}</h1>
                <p>{pizzaPlace.description}</p>
            </div>
        );
    });

    console.log(pizzaPlacesList);
    return(
        // Always enclose adjacent jsx in a div
        <div>
            {pizzaPlacesList}
        </div>
    )


    // return (
        // JSX - JavaScript XML
        // React.createElement(div, ...)
    //     <div class = 'pizza'>
    //         <h1>{props.brand.toUpperCase()}</h1>
    //         <p>{props.description}</p>
    //     </div>
    // );
}

export default Pizza;