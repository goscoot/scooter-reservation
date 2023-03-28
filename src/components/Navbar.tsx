import { useEffect } from "react";
import { Link } from "react-router-dom";
import basket from "../assets/basket.svg";
import logo from "../assets/logo.svg";
import { useAuth } from "../hooks/useAuth";

export const Navbar = () => {
  const { isLogged, authCheck } = useAuth();

  useEffect(() => {
    authCheck();
  }, []);

  return (
    <nav>
      <div>
        <img src={logo} alt="logo" />
      </div>
      <ul className="menu text-body">
        <li className="text-600">
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/products">Products</Link>
        </li>
        {!isLogged && (
          <li>
            <button className="btn btn-primary text-caption">
              <Link to="/register">Sign Up</Link>
            </button>
          </li>
        )}

        <li>
          <div>
            <span className="basket-notification text-caption">1</span>
            <img src={basket} alt="product basket" />
          </div>
        </li>
      </ul>
    </nav>
  );
};
