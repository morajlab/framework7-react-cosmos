import type {
  IMTComponentFunction,
  IMTComponentProps,
  IMTStyleFunction,
} from "@types";

export interface IAppProps extends IMTComponentProps {}

export interface IAppStyleProps {}

export type AppComponent = IMTComponentFunction<IAppProps>;

export type AppStyle = IMTStyleFunction<IAppStyleProps>;
