"use client";
import { PropsWithChildren } from "react";

export function TooltipProvider({ children }: PropsWithChildren) {
  // minimal stub for migration; keep API surface to avoid many imports
  return <div>{children}</div>;
}

export default TooltipProvider;
