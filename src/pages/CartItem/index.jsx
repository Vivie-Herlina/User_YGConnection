import React, { useState } from "react";

const CartItem = ({ item, onRemove, onQuantityChange }) => {
  const [quantity, setQuantity] = useState(1);

  const handleQuantityChange = (change) => {
    const newQuantity = Math.max(1, quantity + change);
    setQuantity(newQuantity);
    onQuantityChange(item.price * newQuantity);
  };

  return (
    <div className="cart-item">
      <input type="checkbox" className="item-select" />
      <img src={item.image} alt={item.name} />
      <div className="item-details">
        <h3>{item.name}</h3>
        <p className="pre-order">Pre-Order</p>
      </div>
      <div className="item-controls">
        <button onClick={() => handleQuantityChange(-1)} className="minus-btn">-</button>
        <span className="quantity">{quantity}</span>
        <button onClick={() => handleQuantityChange(1)} className="plus-btn">+</button>
        <span className="item-price">Rp{(item.price * quantity).toLocaleString("id-ID")}</span>
        <button onClick={() => onRemove(item.id)} className="remove-btn">X</button>
      </div>
    </div>
  );
};

export default CartItem;