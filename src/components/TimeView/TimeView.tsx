import React from "react";
import { Styles } from "./TimeView.styles";
import type { TimeViewComponent } from "./TimeView.types";

export const TimeView: TimeViewComponent = ({ ...rest }) => {
  const { root, time, layer } = Styles();

  return (
    <div {...root}>
      <div {...time} {...layer} {...rest}>
        {["03", "42", "23", "PM"].map((value, key) => (
          <div key={key}>{value}</div>
        ))}
      </div>
    </div>
  );
};

export default TimeView;
