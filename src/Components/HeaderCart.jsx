import { Link } from "react-router-dom";

export default function HeaderCart() {
  return (
    <Link to="cart">
      <img src="/assets/img/car-shop-icon.png" alt="Cart" />
    </Link>
  );
}
