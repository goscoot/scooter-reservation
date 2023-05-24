import { Field, ErrorMessage } from "formik";

import PickLocation from "@/components/booking/form/PickLocation";

import useBasketStore from "@/store/useBasketStore";
import { useEffect } from "react";
import PersonalInformation from "@/components/booking/form/PersonalInformation";
import ReservationAndReturnDate from "@/components/booking/form/ReservationAndReturnDate";
import PaymentMethod from "@/components/booking/form/PaymentMethod";
import { Dispatch, SetStateAction } from "react";

interface BookingFormProps {
  setItems: Dispatch<SetStateAction<string>>;
  setSelectedPayment: Dispatch<SetStateAction<string>>;
}

const BookingForm = ({ setItems, setSelectedPayment }: BookingFormProps) => {
  const { basketProducts } = useBasketStore();

  useEffect(() => {
    setItems(JSON.stringify(basketProducts));
  }, [basketProducts]);

  return (
    <>
      <PersonalInformation />
      <ReservationAndReturnDate />
      <PickLocation />
      <PaymentMethod setSelectedPayment={setSelectedPayment} />

      <Field type="text" style={{ display: "none" }} name="items" />
      <ErrorMessage
        className="error-message text-body-sm"
        name="items"
        component="div"
      />
    </>
  );
};

export default BookingForm;
