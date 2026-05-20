export type StepStatus = "idle" | "generated" | "saved";

export type Step = {
  id: string;
  title: string;
  prompt: string;
  output: string;
  status: StepStatus;
};

export type PreviewSection = {
  id: string;
  title: string;
  stepId?: string;
};
