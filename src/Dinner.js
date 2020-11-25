import React from "react";

function Dinner(props) {
  return (
    <div>
      <p>
        <strong>{props.dishName}</strong> will be served as the main meal in the
        dinner today
      </p>
      <p>
        <strong>{props.dessert}</strong> will be served as the dessert in the
        dinner today
      </p>
    </div>
  );
}

export default Dinner;
