import React, { ChangeEvent, FormEvent, useState } from "react";
import { Link } from "react-router-dom";

export function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const manageSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
  };

  const handleChange = (handler: string) => (event: ChangeEvent<HTMLInputElement>) => {
    switch (handler) {
      case 'email':
        setEmail(event.target.value);
        break;
      case 'password':
        setPassword(event.target.value);
        break;
      default:
        break;
    }
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
                placeholder="johndoe@gmail.com"
                value={email}
                onChange={handleChange('email')}
              />
            </div>
            <div className="signin__wrapper2__pass">
              <div className="text-caption">Password</div>
              <input
                className="input-text"
                type="password"
                placeholder="password"
                value={password}
                onChange={handleChange('password')}
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
