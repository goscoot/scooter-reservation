import { Link, useNavigate } from "react-router-dom";
import basket from "../assets/basket.svg";
import logo from "../assets/logo.svg";
import userIcon from "../assets/user-icon.svg";
import arrowDown from "../assets/arrow-down.svg";
import { AuthContextType, useAuth } from "../context/AuthContext";
import { useEffect, useState, useRef } from "react";
import useBasketStore from "../store/useBasketStore";

export const Navbar = () => {
  const [onDisplay, setOnDisplay] = useState(false);
  const { currentUser, logout } = useAuth() as AuthContextType;
  const navigate = useNavigate();
  const userIconRef = useRef<any>(null);
  const [basketCount, setBasketCount] = useState(0);

  const { basketProducts } = useBasketStore();

  useEffect(() => {
    setBasketCount(basketProducts.reduce((sum, num) => (sum += num.count), 0));
  }, [basketProducts]);

  async function handleLogout() {
    try {
      await logout();
      setOnDisplay(false);
    } catch (err) {
      console.log(err);
    }
  }

  function redirectToReservations() {
    navigate("/reservations");
  }

  function handleClickOutside(event: MouseEvent) {
    if (!userIconRef.current?.contains(event.target)) {
      setOnDisplay(false);
    }
  }

  useEffect(() => {
    if (!onDisplay) {
      return;
    }
    document.addEventListener("click", handleClickOutside, true);
    return () => {
      document.removeEventListener("click", handleClickOutside, true);
    };
  }, [onDisplay]);

  return (
    <nav>
      <div>
        <img src={logo} alt="logo" />
      </div>
      <ul className="menu text-body">
        <li className="text-weight-600">
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/products">Products</Link>
        </li>
        {!currentUser && (
          <li>
            <button className="btn btn-primary text-caption">
              <Link to="/register">Sign Up</Link>
            </button>
          </li>
        )}
        <li className="basket">
          <Link to="/booking">
            {basketCount > 0 && (
              <span className="basket-notification text-caption">
                {basketCount}
              </span>
            )}
            <img src={basket} alt="product basket" />
          </Link>
        </li>
        {currentUser && (
          <li className="user-icon" onClick={() => setOnDisplay(!onDisplay)}>
            <img src={userIcon} alt="user icon" />
            <img src={arrowDown} alt="arrown down" />
          </li>
        )}
        {onDisplay && (
          <div className="user-icon__modal" ref={userIconRef}>
            <button onClick={redirectToReservations}>Reservations</button>
            <button onClick={handleLogout}>Sign Out</button>
          </div>
        )}
      </ul>
    </nav>
  );
};
