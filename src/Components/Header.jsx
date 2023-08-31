import { Link } from "react-router-dom";
import { contants } from "../Contants/contants";
import HeaderCart from "./HeaderCart";
import User from "./User";

export default function Header() {
  return (
    <header>
      <nav className="parent-row">
        <div className="logo-parent width-1">
          <Link to="/">
            <img src="/assets/img/logo.png" alt="logo" width="80px" />
          </Link>
        </div>
        <ul className="width-3 parent-row">
          <li>
            <Link to={`products?category=${contants.headerCategories.men}`}>
              <h1>Men</h1>
            </Link>
          </li>
          <li>
            <Link to={`products?category=${contants.headerCategories.women}`}>
              <h1>Women</h1>
            </Link>
          </li>
          <li>
            <Link to={`products?category=${contants.headerCategories.child}`}>
              <h1>Kids</h1>
            </Link>
          </li>
        </ul>
        <ul className="parent-row width-1">
          <li className="cart">
            <HeaderCart />
          </li>
          <li>
            <User />
          </li>
        </ul>
      </nav>
    </header>
  );
}
