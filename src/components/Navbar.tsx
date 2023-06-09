import { Link, NavLink } from "react-router-dom";
import basket from "@/assets/basket.svg";
import logo from "@/assets/logo.svg";
import userIcon from "@/assets/user-icon.svg";
import arrowDown from "@/assets/arrow-down.svg";
import { AuthContextType, useAuth } from "@/context/AuthContext";
import { useEffect, useState, useRef } from "react";
import useBasketStore from "../store/useBasketStore";

export const Navbar = () => {
  const [onDisplay, setOnDisplay] = useState(false);
  const { currentUser, logout } = useAuth() as AuthContextType;
  const userIconRef = useRef<any>(null);
  const [basketCount, setBasketCount] = useState<number>(0);

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
    <nav className="navbar">
      <div>
        <img src={logo} alt="logo" />
      </div>
      <ul className="navbar__links text-body">
        <li className="font-weight-600">
          <NavLink
            to="/"
            className={({ isActive }) => (isActive ? "font-weight-700" : "")}
          >
            Home
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/products"
            className={({ isActive }) => (isActive ? "font-weight-700" : "")}
          >
            Products
          </NavLink>
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
          <li className="dropdown" onClick={() => setOnDisplay(!onDisplay)}>
            <div className="profile">
              <img src={userIcon} alt="user icon" />
              <img src={arrowDown} alt="arrow down" />
            </div>
            {onDisplay && (
              <div
                className="dropdown__content profile__dropdown"
                ref={userIconRef}
              >
                <Link to="/reservations">Reservations</Link>
                <button onClick={handleLogout}>Sign Out</button>
              </div>
            )}
          </li>
        )}
      </ul>
    </nav>
  );
};
