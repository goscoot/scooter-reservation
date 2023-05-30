import { Link, useNavigate } from "react-router-dom";
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";
import { AuthContextType, useAuth } from "@/context/AuthContext";

const passwordRules = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,}$/;
// min 6 characters, 1 upper case letter, 1 lower case letter, 1 numeric digit.

const SinginSchema = Yup.object().shape({
  email: Yup.string()
    .email("Invalid email address")
    .required("Email is required"),
  password: Yup.string()
    .min(6, "Password must be at least 6 characters long")
    .matches(passwordRules, {
      message: "Please create a stronger password",
    })
    .required("Password is required"),
});

export function Login() {
  const { login } = useAuth() as AuthContextType;
  const navigate = useNavigate();

  return (
    <div className="signin__login">
      <div className="signin__login__container">
        <Formik
          initialValues={{ email: "", password: "" }}
          validationSchema={SinginSchema}
          onSubmit={(values) => {
            setTimeout(async () => {
              try {
                await login(values.email, values.password);
                navigate("/");
              } catch (err) {
                console.log(err);
              }
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
                  className="input-text text-caption"
                  type="text"
                  name="email"
                  placeholder="johndoe@gmail.com"
                />
                <ErrorMessage
                  className="error-message text-caption"
                  name="email"
                  component="div"
                />
              </div>
              <div className="signin__wrapper2__pass">
                <div className="text-caption">Password</div>
                <Field
                  className="input-text text-caption"
                  type="password"
                  name="password"
                  placeholder="password"
                />
                <ErrorMessage
                  className="error-message text-caption"
                  name="password"
                  component="div"
                />
              </div>
            </div>
            <div className="signin__wrapper3">
              <button className="btn btn-primary text-caption" type="submit">
                Login
              </button>
              <Link
                to="/register"
                className="signin__wrapper3__link text-caption font-weight-600"
              >
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
