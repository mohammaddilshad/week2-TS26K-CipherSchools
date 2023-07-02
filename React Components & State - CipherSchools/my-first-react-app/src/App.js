import React, { Component } from 'react';
import Pizza from './components/Pizza.js';

// function App() {
//   return (
//     <div className="App">
//       <h1>My first react App</h1>
//     </div>
//   );
// }

// class based component

class App extends Component {

  state = {
    dynamicName: "Pizza Hunter",
    pizzaPlaces: [
      {name: "Pizza Hut", description: "Best pizza"},
      {name: "Dominos", description: "Best Pizza in town"},
      {name: "Papa Johns", description: "Pizza place"},
      {name: "Ovenbricks", description: "Authentic Pizza"}
    ]
  }



  render() {
    // let dynamicName = "React is mind blowing";
    // let brand = "PizzaHut";
    // let description = "Best pizza in town!!";
    // let brand2 = "Dominos";
    // let description2 = "Better than the Best!!";
    return (
      <div>
        <h1>{this.state.dynamicName}</h1>
        {/* <Pizza brand={this.state.pizzaPlaces[0].name} description={this.state.pizzaPlaces[0].description}></Pizza> */}
        <Pizza pizzaPlaces={this.state.pizzaPlaces}></Pizza>
      </div>
    );
  }
}

export default App;
