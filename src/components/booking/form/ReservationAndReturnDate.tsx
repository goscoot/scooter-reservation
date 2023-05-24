import { Field, ErrorMessage } from "formik";

const ReservationAndReturnDate = () => {
  return (
    <div className="form-group__container">
      <h2 className="text-heading2">Pick reservation and return date</h2>
      <span className="heading-subtext text-display1">2</span>
      <div>
        <div className="date-container">
          <div>
            <p className="text-caption">Reservation Date</p>
            <Field
              type="date"
              name="reservationDate"
              className="text-body-sm input-date"
            />
            <ErrorMessage
              className="error-message text-body-sm"
              name="reservationDate"
              component="div"
            />
          </div>
          <div>
            <p className="text-caption">Starting from</p>
            <Field
              type="time"
              name="startingFrom"
              className="text-body-sm input-time"
            />
            <ErrorMessage
              className="error-message text-body-sm"
              name="startingFrom"
              component="div"
            />
          </div>
        </div>
        <div className="date-container">
          <div>
            <p className="text-caption">Return date</p>
            <Field
              type="date"
              name="returnDate"
              className="text-body-sm input-date"
            />
            <ErrorMessage
              className="error-message text-body-sm"
              name="returnDate"
              component="div"
            />
          </div>
          <div>
            <p className="text-caption">Finish time</p>
            <Field
              type="time"
              name="finishTime"
              className="text-body-sm input-time"
            />
            <ErrorMessage
              className="error-message text-body-sm"
              name="finishTime"
              component="div"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReservationAndReturnDate;
