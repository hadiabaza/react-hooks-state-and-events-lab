import React, { useState } from "react";

function Item({ name, category }) {
  const [inCart, setInCart] = useState("");

  function handleCart() {
    console.log("clicked");
    setInCart((inCart) => !inCart);
  }

  return (
    <li className={inCart ? "in-cart" : ""}>
      <span>{name}</span>
      <span className="category">{category}</span>
      <button onClick={handleCart} className="add">
        {inCart ? "Remove from Cart" : "Add to Cart"}
      </button>
    </li>
  );
}

export default Item;
