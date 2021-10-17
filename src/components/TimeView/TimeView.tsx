import React from "react";
import { Styles } from "./TimeView.styles";
import type { TimeViewComponent } from "./TimeView.types";

export const TimeView: TimeViewComponent = ({ ...rest }) => {
  const { root } = Styles();

  return (
    <div className={root} {...rest}>
      {["03", "42", "23", "PM"].map((value, key) => (
        <span key={key}>{value}</span>
      ))}
    </div>
  );
};

export default TimeView;
