import { Field, ErrorMessage } from "formik";
import paypalCard from "../../../assets/paypal-card.svg";
import paymentCard from "../../../assets/payment-card.svg";
import { SetStateAction, Dispatch } from "react";

type TPaymentMethod = {
  name: string;
  value: string;
  icon: string;
  id: number;
};

export const paymentMethods: TPaymentMethod[] = [
  { name: "Card", value: "paymentCard", icon: paymentCard, id: 1 },
  { name: "Paypal", value: "paypal", icon: paypalCard, id: 2 },
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
      <div className="form-group__payment">
        {paymentMethods.map((method) => (
          <div key={method.id}>
            <div className="form-group__icon">
              <Field
                type="radio"
                name="paymentMethod"
                id={method.value}
                value={method.value}
                onClick={handlePaymentChange}
                className="form-group__input"
              />
              <img src={method.icon} alt="" />
            </div>
            <label
              htmlFor={method.value}
              className="text-caption text-weight-600"
            >
              {method.name}
            </label>
          </div>
        ))}
      </div>

      <ErrorMessage
        className="error-message text-body-sm"
        name="paymentMethod"
        component="div"
      />
    </div>
  );
};

export default PaymentMethod;
