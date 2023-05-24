import { Field, ErrorMessage } from "formik";
import { useAuth, AuthContextType } from "@/context/AuthContext";

const PersonalInformation = () => {
  const { currentUser } = useAuth() as AuthContextType;

  return (
    <div
      className={
        !currentUser ? "form-group__container" : "form-group__container--hidden"
      }
    >
      <h2 className="text-heading2">Personal information</h2>
      <span className="heading-subtext text-display1">1</span>
      <p className="text-caption">Name and Lastname</p>
      <Field
        className="input-text text-body-sm"
        type="text"
        name="name"
        placeholder="John Doe"
        autoComplete="name"
      />
      <ErrorMessage
        className="error-message text-body-sm"
        name="name"
        component="div"
      />
      <div className="text-caption">Email</div>
      <Field
        className="input-text text-body-sm"
        type="text"
        name="email"
        placeholder="johndoe@gmail.com"
        autoComplete="email"
      />
      <ErrorMessage
        className="error-message text-body-sm"
        name="email"
        component="div"
      />
    </div>
  );
};

export default PersonalInformation;
