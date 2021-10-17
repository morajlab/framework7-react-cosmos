import type { HTMLAttributes, FunctionComponent } from "react";

export interface IComponentProps extends HTMLAttributes<HTMLDivElement> {}

export type IComponentFunction<T> = FunctionComponent<T>;
