import type { HTMLAttributes, FunctionComponent } from "react";

export interface IMTComponentProps extends HTMLAttributes<HTMLDivElement> {}

export type IMTComponentFunction<T> = FunctionComponent<T>;

export interface IMTStyleFunction<T> {
  (props?: T): any;
}
