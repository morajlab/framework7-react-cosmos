import type {
  IMTComponentFunction,
  IMTComponentProps,
  IMTStyleFunction,
} from "@types";

export interface IAuthProps extends IMTComponentProps {}

export interface IAuthStyleProps {}

export type AuthComponent = IMTComponentFunction<IAuthProps>;

export type AuthStyle = IMTStyleFunction<IAuthStyleProps>;
