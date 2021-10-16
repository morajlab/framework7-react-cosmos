import { style } from "@utils";
import type { TimeViewStyle } from "./TimeView.types";

export const Styles: TimeViewStyle = () => {
  const coverSize = {
    width: "100%",
    height: "100%",
  };

  return {
    root: style({
      display: "flex",
      justifyContent: "center",
      alignItems: "stretch",
      ...coverSize,
    }),
    time: style({
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      textAlign: "center",
      fontWeight: "bold",
      fontSize: "50px",
    }),
    layer: style({
      position: "absolute",
      inset: 0,
      ...coverSize,
    }),
  };
};

export default Styles;
