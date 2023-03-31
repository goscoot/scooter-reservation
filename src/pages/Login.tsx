import React from "react";
import { Link } from "react-router-dom";
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";

export function Login() {
  return (
    <div className="signin__login">
      <div className="signin__login__container">
        <Formik
          initialValues={{ email: "", password: "" }}
          validationSchema={Yup.object().shape({
            email: Yup.string()
              .email("Invalid email address")
              .required("Email is required"),
            password: Yup.string()
              .min(6, "Password must be at least 6 characters long")
              .required("Password is required"),
          })}
          onSubmit={(values) => {
            setTimeout(() => {
              //fetch actions will be executed there
            }, 400);
          }}
        >
          <Form>
            <div className="signin__wrapper1">
              <h1 className="text-heading1">Login</h1>
            </div>
            <div className="signin__wrapper2">
              <div className="signin__wrapper2__mail">
                <div className="text-caption">E-mail</div>
                <Field
                  className="input-text"
                  type="text"
                  name="email"
                  placeholder="johndoe@gmail.com"
                />
                <ErrorMessage
                  className="error-message"
                  name="email"
                  component="div"
                />
              </div>
              <div className="signin__wrapper2__pass">
                <div className="text-caption">Password</div>
                <Field
                  className="input-text"
                  type="password"
                  name="password"
                  placeholder="password"
                />
                <ErrorMessage
                  className="error-message"
                  name="password"
                  component="div"
                />
              </div>
            </div>
            <div className="signin__wrapper3">
              <button className="btn btn-primary" type="submit">
                Login
              </button>
              <Link to="/register" className="signin__wrapper3__link">
                <span className="link-underlined">
                  Don’t have account yet?{" "}
                </span>
                <span className="link-colored">Register</span>
              </Link>
            </div>
          </Form>
        </Formik>
      </div>
    </div>
  );
}
