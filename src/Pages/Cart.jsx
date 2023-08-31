import { useEffect, useState } from "react";
import Banner from "../Components/Banner";
import CartItems from "../Components/CartItems";
import AuthService from "../Services/authService";
import CartService from "../Services/cartService";
import { useNavigate } from "react-router-dom";

export default function Cart() {
  const [cart, setCart] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    if (!AuthService.isLogedIn()) {
      navigate("/login");
      return;
    }
    CartService.get().then((cartResponse) => {
      setCart(cartResponse);
    });
  }, [navigate]);

  return (
    <>
      <Banner image="/assets/img/cart-banner.jpg">
        <h1>Shopping Cart</h1>
      </Banner>
      <main className="margintop100">
        <section>
          <div className="container">
            {cart.length !== 0 && <CartItems cart={cart} setCart={setCart} />}
            {cart.length === 0 && <h1>Your Cart Is Empty</h1>}
          </div>
        </section>
      </main>
    </>
  );
}
