import type {
  IMTStyleFunction,
  IMTComponentProps,
  IMTComponentFunction,
} from "@types";

export interface ITimeViewProps extends IMTComponentProps {}

export interface ITimeViewStyleProps {}

export type TimeViewComponent = IMTComponentFunction<ITimeViewProps>;

export type TimeViewStyle = IMTStyleFunction<ITimeViewStyleProps>;
