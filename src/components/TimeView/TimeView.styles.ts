import { createUseStyles } from "react-jss";

export const Styles = createUseStyles({
  root: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    fontWeight: "bold",
    fontSize: "50px",
    position: "relative",
    textAlign: "center",
    userSelect: "none",
  },
});

export default Styles;
