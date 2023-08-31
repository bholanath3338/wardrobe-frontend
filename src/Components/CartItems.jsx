import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import CartService from "../Services/cartService";
import CartItem from "./CartItem";

export default function CartItems({ cart, setCart }) {
  const [prices, setPrices] = useState({});

  useEffect(() => {
    CartService.getPrices().then((pricesD) => setPrices(pricesD));
  }, [cart]);

  if (cart.length === 0) {
    return;
  }

  return (
    <div className="parent-row" id="cart">
      <div className="width-6-6 main_cart cart-left">
        <div>
          <table className="table">
            <thead>
              <tr>
                <th scope="col" className="max-w100">
                  Product
                </th>
                <th scope="col"> </th>
                <th scope="col">Size</th>
                <th scope="col">Price</th>
                <th scope="col">Qty</th>
                <th scope="col">Total</th>
                <th scope="col"></th>
              </tr>
            </thead>
            <tbody className="product-container">
              {cart.map((cartItem, index) => (
                <CartItem key={index} cartItem={cartItem} setCart={setCart} />
              ))}
            </tbody>
          </table>
        </div>
      </div>
      <div className="width-3-3 cart-right">
        <div className="right_side p-3 shadow bg-white">
          <h2 className="product_name mb-5">Total in Cart</h2>
          <div className="price_indiv f-flex justify-content-between">
            <p>Product amount</p>
            <p className="product_total">${prices.sub ?? 0.0}</p>
          </div>
          <div className="price_indiv f-flex justify-content-between">
            <p>Tax</p>
            <p className="tax_total">${prices.tax ?? 0.0}</p>
          </div>
          <div className="total-amt f-flex justify-content-between font-weight-bold">
            <p>Total</p>
            <p className="total_amount">${prices.total ?? 0.0}</p>
          </div>
          <div className="check-btn f-flex">
            <Link to="/checkout">PROCEED TO CHECKOUT</Link>
          </div>
          <div className="f-flex justify-content-start shopping">
            <div className="width-10">
              <Link to="/products" className="continue-shopping">
                Continue shopping
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
