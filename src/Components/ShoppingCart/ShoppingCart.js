import React from "react";
import "./ShoppingCart.scss";
import { AiFillCloseCircle } from "react-icons/ai";
import { RiDeleteBin6Line } from "react-icons/ri";
import emptyCartt from "../../images/emptycart2.png";
import { Link } from "react-router-dom";
function ShoppingCart({
  visibilty,
  products,
  onProductRemove,
  onClose,
  onQuantityChange,
  emptyCart,
}) {
  return (
    <div
      className="modal"
      // shopping cart display / block akkaann
      style={{
        display: visibilty ? "block" : "none",
      }}
    >
      <div className="shoppingCart">
        <div className="header">
          <h2>Shopping cart</h2>

          {/* * btn == close cheyyan */}
          <button className="btnclose" onClick={onClose}>
            <AiFillCloseCircle size={30} />
          </button>
        </div>
        <div className="cart-products">
          {products.length === 0 && (
            <span className="empty-text">
              <img className="emptycartimg" src={emptyCartt} alt="" />
              <Link to="/Services" className="emptycartbtn">
                Shop Now
              </Link>
            </span>
          )}

          {products.map((product) => (
            <div className="cart-product" key={product.id}>
              <img src={product.image} alt={product.title} />

              <div className="product-info">
                <h3 className="carthead">{product.title}</h3>
                <h6 className="cartsubhead">{product.description}</h6>
              </div>
              <select
                className="count"
                value={product.count}
                onChange={(event) => {
                  onQuantityChange(product.id, event.target.value);
                }}
              >
                {[...Array(10).keys()].map((number) => {
                  const num = number + 1;
                  return (
                    <option value={num} key={num}>
                      {num}
                    </option>
                  );
                })}
              </select>

              <button
                className="btnremove"
                onClick={() => onProductRemove(product)}
              >
                <RiDeleteBin6Line size={20} />
              </button>
            </div>
          ))}
          {products.length > 0 && (
            <button className="btncheckout" onClick={emptyCart}>
              Empty{" "}
            </button>
          )}
        </div>
      </div>
    </div>
  );
}

export default ShoppingCart;
