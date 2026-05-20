import type { PreviewSection, Step } from "@/components/workflows/triptych/types";

export const INITIAL_STEPS: Step[] = [
  {
    id: "policy-context",
    title: "1.  Candidate Context",
    prompt:
      "Establish who this candidate is today: target role, seniority, industry, and what “good” looks like for the next role. Note constraints (visa, location, comp band) only if provided.",
    output: "",
    status: "idle",
  },
  {
    id: "requirements",
    title: "1.1  Experience & Signals",
    prompt:
      "From the resume, extract 5–7 concrete experience anchors (scope, team size, metrics, tech). Separate strong evidence from weak or implied claims.",
    output: "",
    status: "idle",
  },
  {
    id: "roles",
    title: "1.2  Strengths & Gaps",
    prompt:
      "Using Candidate Context + Experience & Signals, name 3 strengths with proof and 2 gaps or risks recruiters may probe. Keep it specific—no generic praise.",
    output: "",
    status: "idle",
  },
  {
    id: "draft-policy",
    title: "2.  Resume Summary",
    prompt:
      "Synthesize prior steps into a tight professional summary: lead with positioning, follow with two proof-backed lines, close with direction. Avoid buzzwords unless they match the target role.",
    output: "",
    status: "idle",
  },
];

export const PREVIEW_SECTIONS: PreviewSection[] = [
  { id: "pv-policy", title: "Candidate Context", stepId: "policy-context" },
  { id: "pv-req", title: "Experience & Signals", stepId: "requirements" },
  { id: "pv-roles", title: "Strengths & Gaps", stepId: "roles" },
  { id: "pv-draft", title: "Resume Summary", stepId: "draft-policy" },
  { id: "pv-review", title: "Review and Finalize" },
];

export function previewStatusTag(
  step: Step | undefined,
  activeStepId: string,
): string {
  if (!step) return "Pending";
  if (step.status === "saved") return "Saved";
  if (step.id === activeStepId) return "In Editor";
  return "Pending";
}

export function clipSnippet(text: string, maxLen = 88): string {
  const t = text.replace(/\s+/g, " ").trim();
  if (!t) return "";
  return t.length > maxLen ? `${t.slice(0, maxLen - 1)}…` : t;
}

export function generatedOutputForStep(step: Step): string {
  switch (step.id) {
    case "policy-context":
      return `Target: Senior Product Designer (AI workflows). Background: 10+ yrs shipping enterprise tools; strongest in research synthesis, interaction systems, and cross-functional facilitation. Intent: move deeper into AI-native product work with measurable outcomes.`;
    case "requirements":
      return `Signals: owned end-to-end workflow UX for a multi-pane editor; ran usability tests that changed roadmap priorities; shipped iterative releases under compliance constraints. Gaps: limited public portfolio artifacts; metrics sometimes implied vs quantified.`;
    case "roles":
      return `Strengths: (1) turns ambiguous AI capabilities into legible UI models, (2) strong facilitation across eng/research/legal, (3) bias for crisp interaction states. Gaps: (1) quantify business impact more consistently, (2) tighten storytelling for non-design reviewers.`;
    case "draft-policy":
      return `Product designer specializing in AI workflow experiences—translating model behavior into predictable, reviewable interfaces. Proven in enterprise environments; pairs fast iteration with research-backed judgment. Seeking roles where design owns clarity, not just polish.`;
    default:
      return `Analysis draft for “${step.title}”: structured takeaways ready to review and save into the preview.`;
  }
}
