import React from 'react';
import './CartItem.css';

function CartItem({ onContinueShopping }) {
  return (
    <div className="cart-item-container">
      <h2>Total Shopping Cart</h2>
      <button className="get-started-button" onClick={onContinueShopping}>Continue Shopping</button>
    </div>
  );
}

export default CartItem;
