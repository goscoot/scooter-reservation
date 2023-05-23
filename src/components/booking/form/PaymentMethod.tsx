import { Field, ErrorMessage } from "formik";
import paypalCard from "../../../assets/paypal-card.svg";
import paymentCard from "../../../assets/payment-card.svg";
import { SetStateAction, Dispatch } from "react";

type TPaymentMethod = {
  value: string;
  icon: string;
  id: number;
};

export const paymentMethods: TPaymentMethod[] = [
  { value: "paymentCard", icon: paymentCard, id: 1 },
  { value: "paypalCard", icon: paypalCard, id: 2 },
];

interface PaymentMethodProps {
  // payment: SetStateAction<string>;
  setSelectedPayment: Dispatch<SetStateAction<string>>;
}

const PaymentMethod = ({ setSelectedPayment }: PaymentMethodProps) => {
  const handlePaymentChange = (event: MouseEvent) => {
    const target = event.target as HTMLInputElement;
    if (target != null) {
      setSelectedPayment(target.value);
    }
  };
  return (
    <div
      className="form-group__container"
      role="group"
      aria-labelledby="my-radio-group"
    >
      <h2 className="text-heading2">Payment method</h2>
      <span className="heading-subtext text-display1">4</span>
      {paymentMethods.map((method) => (
        <div className="form-group__icon" key={method.id}>
          <label htmlFor={method.value}>
            <Field
              type="radio"
              name="paymentMethod"
              id={method.value}
              value={method.value}
              onClick={handlePaymentChange}
              className="form-group__icon"
            />
            <img src={method.icon} alt="" />
          </label>
        </div>
      ))}

      <ErrorMessage
        className="error-message text-body-sm"
        name="paymentMethod"
        component="div"
      />

      <div className="form-group__icon-names">
        <p className="text-caption text-weight-600">Card</p>
        <p className="text-caption text-weight-600">PayPal</p>
      </div>
    </div>
  );
};

export default PaymentMethod;
