import React, { Fragment } from "react";
import {
  LoginScreenTitle,
  List,
  ListInput,
  ListButton,
  BlockFooter,
} from "framework7-react";
import { Styles } from "./Auth.styles";
import type { AuthComponent } from "./Auth.types";

export const Auth: AuthComponent = ({ ...rest }) => {
  const { root } = Styles();

  return (
    <Fragment {...root} {...rest}>
      <LoginScreenTitle>Framework7</LoginScreenTitle>
      <List form>
        <ListInput label="Username" type="text" placeholder="Your username" />
        <ListInput
          label="Password"
          type="password"
          placeholder="Your password"
        />
      </List>
      <List>
        <ListButton>Sign In</ListButton>
        <BlockFooter>
          Some text about login information.
          <br />
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </BlockFooter>
      </List>
    </Fragment>
  );
};

export default Auth;