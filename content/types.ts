export type CaseStudySlug = "workflows" | "outputs" | "reconstruction" | "desk-swarm";

export type CaseStudySplashVariant = CaseStudySlug;

export type VisualKey =
  | "original-model"
  | "workflow-challenge"
  | "triptych-architecture"
  | "triptych-product"
  | "outputs-overview"
  | "outputs-challenge"
  | "outputs-approach"
  | "outputs-outcome"
  | "reconstruction-overview"
  | "reconstruction-challenge"
  | "reconstruction-approach"
  | "reconstruction-outcome"
  | "desk-swarm-overview"
  | "desk-swarm-challenge"
  | "desk-swarm-approach"
  | "desk-swarm-outcome";

export type CaseStudyContent = {
  slug: CaseStudySlug;
  splash: CaseStudySplashVariant;
  card: {
    title: string;
    description: string;
  };
  page: {
    title: string;
    subtitle: string;
    hook: string;
    metaDescription: string;
  };
  sections: {
    overview: string[];
    challenge: string[];
    approach: string[];
    outcome: string[];
  };
  visuals: {
    overview: VisualKey;
    challenge: VisualKey;
    approach: VisualKey;
    outcome: VisualKey;
  };
  visualLabels?: Partial<Record<keyof CaseStudyContent["visuals"], { label: string; text: string }>>;
};
