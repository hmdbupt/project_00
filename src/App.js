// import React from "react";
import "./App.css";
import Dinner from "./Dinner";

function App() {
  return (
    <div class="app--container">
      <h1>What is going to be served in today's dinner?</h1>
      <hr />
      <Dinner dishName="Chicken Biryani" dessert="Pineapple Trifle" />
    </div>
  );
}

export default App;
