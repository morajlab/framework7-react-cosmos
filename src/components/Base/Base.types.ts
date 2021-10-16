import type {
  IMTComponentProps,
  IMTComponentFunction,
  IMTStyleFunction,
} from "@types";

export interface IBaseProps extends IMTComponentProps {}

export interface IBaseStyleProps {}

export type BaseComponent = IMTComponentFunction<IBaseProps>;

export type BaseStyle = IMTStyleFunction<IBaseStyleProps>;
