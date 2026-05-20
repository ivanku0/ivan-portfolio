import type { ReactNode } from "react";

export type CaseStudyVisualSlot = {
  label: string;
  text: string;
  bare?: boolean;
  content: ReactNode;
};
