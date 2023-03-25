import React, { useState } from "react";
import { Link } from "react-router-dom";

export function Login() {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const manageSubmit = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    console.log(`${email} | ${password}`);
  };

  return (
    <div className="signin__login">
      <div className="signin__login__container">
        <form onSubmit={manageSubmit}>
          <div className="signin__wrapper1">
            <h1 className="text-heading1">Login</h1>
          </div>
          <div className="signin__wrapper2">
            {/* e-mail & password */}
            <div className="signin__wrapper2__mail">
              <div className="text-caption">E-mail</div>
              <input
                className="input-text"
                type="text"
                placeholder="John Doe"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="signin__wrapper2__pass">
              <div className="text-caption">Password</div>
              <input
                className="input-text"
                type="password"
                placeholder="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
          </div>
          <div className="signin__wrapper3">
            {/* confirm button & register */}
            <input className="btn btn-primary" type="submit" />
            <Link to="/register" className="signin__wrapper3__link">
              <span className="link-underlined">Don’t have account yet? </span>
              <span className="link-colored">Register</span>
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
}
