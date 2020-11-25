import React from "react";

function Dinner({ menu }) {
  return (
    <div>
      <p>
        <strong>{menu.dishName}</strong> will be served as the main meal in the
        dinner today. The price of this dish is{" "}
        <strong>{menu.dishPrice}</strong>
      </p>
      <p>
        <strong>{menu.dessertName}</strong> will be served as the dessert in the
        dinner today. The price of this dessert is{" "}
        <strong>{menu.dessertPrice}</strong>
      </p>
    </div>
  );
}

export default Dinner;
