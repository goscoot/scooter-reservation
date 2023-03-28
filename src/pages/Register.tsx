import React, { useState } from "react";
import { Link } from "react-router-dom";

export function Register() {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const manageSubmit = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    console.log(`${email} | ${password}`);
  };

  return (
    <div className="signup__register">
      <div className="signup__register__container">
        <form onSubmit={manageSubmit}>
          <div className="signup__wrapper1">
            <h1 className="text-heading1">Register</h1>
          </div>
          <div className="signup__wrapper2">
            {/* e-mail & password */}
            <div className="signup__wrapper2__name">
              <div className="text-caption">Name and Lastname</div>
              <input
                className="input-text"
                type="text"
                placeholder="John Doe"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="signup__wrapper2__mail">
              <div className="text-caption">E-mail</div>
              <input
                className="input-text"
                type="text"
                placeholder="johndoe@gmail.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="signup__wrapper2__pass">
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
          <div className="signup__wrapper3">
            {/* confirm button & register */}
            <input className="btn btn-primary" type="submit" />
            <Link to="/login" className="signup__wrapper3__link">
              <span className="link-underlined">I already have an account</span>
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
}
