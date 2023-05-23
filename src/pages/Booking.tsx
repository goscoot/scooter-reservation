import { useAuth, AuthContextType } from "../context/AuthContext";
import { useEffect, useState } from "react";

import BookingList from "../components/booking/BookingList";
import BookingForm from "../components/booking/BookingForm";

import { Formik, Form } from "formik";
import * as Yup from "yup";

import { pickCords } from "../components/map/PickLocationMap";
import { paymentMethods } from "../components/booking/form/PaymentMethod";

import useWindowSize from "../hooks/useWindowSize";

const checkoutSchema = Yup.object().shape({
  email: Yup.string()
    .email("Invalid email address")
    .required("Email is required"),
  name: Yup.string()
    .min(4, "Name must be at least 4 characters long")
    .required("Name is required"),
  reservationDate: Yup.date().required("Date is required"),
  startingFrom: Yup.string().required("Start time is required"),
  returnDate: Yup.date().required("Date is required"),
  finishTime: Yup.string().required("Return time is required"),
  pickLocation: Yup.string().required("Pick location is required"),
  paymentMethod: Yup.string().required("Payment method is required"),

  // Can't be required since the update happens inside onSubmit function
  items: Yup.string(),
});

const initialValues = {
  name: "",
  email: "",
  reservationDate: "",
  startingFrom: "",
  returnDate: "",
  finishTime: "",
  pickLocation: pickCords[0].value,
  paymentMethod: paymentMethods[0].value,
  items: "",
};

const Booking = () => {
  const { currentUser } = useAuth() as AuthContextType;
  const windowSize = useWindowSize();

  const [items, setItems] = useState("");
  const [selectedPayment, setSelectedPayment] = useState(
    paymentMethods[0].value
  );

  useEffect(() => {
    if (currentUser) {
      // Grab Name and Last name from database
      // initialValues.name = user.displayName as string;
      initialValues.name = "John Doe";
      initialValues.email = currentUser.email as string;
    }
  }, [currentUser]);

  return (
    <div className="booking">
      <Formik
        initialValues={initialValues}
        validationSchema={checkoutSchema}
        onSubmit={(values, { setSubmitting }) => {
          values.items = items;
          values.paymentMethod = selectedPayment;
          alert(JSON.stringify(values, null, 2));
          setSubmitting(false);
        }}
      >
        <Form className="form-group">
          <div className="container">
            <div className="container__first-group">
              <div className="booking__header">
                <h1
                  className={
                    windowSize.width > 1000 ? "text-heading1" : "text-heading2"
                  }
                >
                  Booking confirmation
                </h1>
              </div>
              <BookingForm
                setItems={setItems}
                setSelectedPayment={setSelectedPayment}
              />
            </div>
            <BookingList />
          </div>
        </Form>
      </Formik>
    </div>
  );
};

export default Booking;
