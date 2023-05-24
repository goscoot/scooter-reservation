import { Field, ErrorMessage, useFormikContext } from "formik";
import { ChangeEvent } from "react";
import PickLocationMap from "../../map/PickLocationMap";
import { useState } from "react";
import { LatLngTuple } from "leaflet";
import { pickCords } from "../../map/PickLocationMap";
import chevronDown from "../../../assets/chevron-down.svg";

type TSetFieldValue = (
  field: string,
  value: any,
  shouldValidate?: boolean | undefined
) => void;

const PickLocation = () => {
  const formik = useFormikContext();

  const [selectedMarker, setSelectedMarker] = useState<LatLngTuple>(
    pickCords[0].coordinates
  );

  const handleMapSelect = (
    event: ChangeEvent<HTMLSelectElement>,
    setFieldValue: TSetFieldValue
  ) => {
    const selectedOption: HTMLOptionElement = event.target.selectedOptions[0];

    const selectedCordsString: string =
      selectedOption.getAttribute("data-cords") ?? "";

    const selectedCordsTuple = selectedCordsString
      .split(",")
      .map((num) => Number(num)) as LatLngTuple;

    // Update selected inner value
    setFieldValue("pickLocation", event.target.value);
    // Update current select on map
    setSelectedMarker(selectedCordsTuple);
  };

  return (
    <div className="form-group__container">
      <h2 className="text-heading2">Pick location</h2>
      <span className="heading-subtext text-display1">3</span>
      <img src={chevronDown} className="input-option__chevron" alt="" />
      <Field
        as="select"
        name="pickLocation"
        className="text-body-sm input-select"
        onChange={(event: ChangeEvent<HTMLSelectElement>) =>
          handleMapSelect(event, formik.setFieldValue)
        }
      >
        {pickCords.map((point) => (
          <option
            key={point.id}
            className="text-body-sm input-option"
            value={point.value}
            data-cords={point.coordinates}
          >
            {point.location}
          </option>
        ))}
      </Field>

      <ErrorMessage
        className="error-message text-body-sm"
        name="pickLocation"
        component="div"
      />
      <PickLocationMap selectedMarker={selectedMarker} />
    </div>
  );
};

export default PickLocation;
