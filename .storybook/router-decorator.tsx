// biome-ignore lint/correctness/noUnusedImports: <explanation>
import React from "react";
import type { ReactNode } from "react";
import type { FC } from "react";
import { BrowserRouter } from "react-router";

export interface RouterDecoratorProps {
  children: ReactNode;
}
const RouterDecorator: FC<RouterDecoratorProps> = ({ children }) => {
  return <BrowserRouter>{children}</BrowserRouter>;
};

export default RouterDecorator;
