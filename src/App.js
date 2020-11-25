import React from "react";
import "./App.css";
import Dinner from "./Dinner";

function App() {
  return (
    <div className="app--container">
      <h1>What is going to be served in today's dinner?</h1>
      <hr />
      <Dinner
        menu={{
          dishName: "Chicken Biryani",
          dishPrice: 450,
          dessertName: "Pineapple Pie",
          dessertPrice: 250,
        }}
      />
    </div>
  );
}

export default App;
