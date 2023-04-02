import { Link, useNavigate } from "react-router-dom";
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";
import { AuthContextType, useAuth } from "../context/AuthContext";

const passwordRules = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,}$/;
// min 6 characters, 1 upper case letter, 1 lower case letter, 1 numeric digit.

const SignupSchema = Yup.object().shape({
  name: Yup.string().required("Name is required"),
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

export function Register() {
  const { register } = useAuth() as AuthContextType;
  const navigate = useNavigate();

  return (
    <div className="signup__register">
      <div className="signup__register__container">
        <Formik
          initialValues={{ name: "", email: "", password: "" }}
          validationSchema={SignupSchema}
          onSubmit={(values) => {
            setTimeout(async () => {
              try {
                await register(values.email, values.password);
                navigate("/");
              } catch (err) {
                console.log(err);
              }
            }, 400);
          }}
        >
          <Form>
            <div className="signup__wrapper1">
              <h1 className="text-heading1">Register</h1>
            </div>
            <div className="signup__wrapper2">
              <div className="signup__wrapper2__name">
                <div className="text-caption">Name and Lastname</div>
                <Field
                  className="input-text"
                  type="text"
                  name="name"
                  placeholder="John Doe"
                />
                <ErrorMessage
                  className="error-message"
                  name="name"
                  component="div"
                />
              </div>
              <div className="signup__wrapper2__mail">
                <div className="text-caption">E-mail</div>
                <Field
                  className="input-text"
                  type="email"
                  name="email"
                  placeholder="johndoe@gmail.com"
                />
                <ErrorMessage
                  className="error-message"
                  name="email"
                  component="div"
                />
              </div>
              <div className="signup__wrapper2__pass">
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
            <div className="signup__wrapper3">
              <button className="btn btn-primary" type="submit">
                Register
              </button>
              <Link to="/login" className="signup__wrapper3__link">
                <span className="link-underlined">
                  I already have an account
                </span>
              </Link>
            </div>
          </Form>
        </Formik>
      </div>
    </div>
  );
}
