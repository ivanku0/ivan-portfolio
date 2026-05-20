import type { CaseStudyContent } from "@/content/types";

export const workflowsCaseStudy: CaseStudyContent = {
  slug: "workflows",
  splash: "workflows",
  card: {
    title: "Predictable AI Workflows",
    description:
      "Redesigned a step-based AI writing flow so teams could see structure, execution, and the growing report in one place—instead of guessing what each run would produce.",
  },
  page: {
    title: "Predictable AI Workflows",
    subtitle:
      "For a B2B document AI product, I led design on a triptych model that separates workflow structure, step execution, and live document visibility.",
    hook: "AI workflows fail when users cannot predict what will happen before they run.",
    metaDescription:
      "Case study on redesigning AI workflow UX with a triptych model for structure, execution, and document visibility.",
  },
  sections: {
    overview: [
      "Users could complete each step, but they could not predict the final report. Prompting, generation, and editing happened in one execution surface while the assembled document stayed invisible during the run.",
      "I led design and definition of the triptych interaction model—Structure, Execution, and Visibility—and shipped interaction diagrams, high-fidelity prototypes, and research synthesis with product and engineering.",
      "The gap was practical: teams wanted fast AI-assisted writing, but they also needed to know when a step was done, which section updated, and how the artifact was taking shape.",
    ],
    challenge: [
      "The product was organized into steps, but meaningful work lived in a single execution pane. Users prompted, generated, and edited in place without seeing how output mapped to report sections.",
      "State was hard to inspect. People inferred completion, commitment, and section ownership—even when generation worked, they were unsure what would happen next.",
      "The challenge visual shows interaction concentrated in Execution while the Document pane sits detached: step labels were visible, but the link between actions and the artifact was not.",
    ],
    approach: [
      "Usability testing surfaced the turning point: participants completed steps correctly but could not explain how the document was being built.",
      "I reframed the model into three layers. Structure defines ordered steps. Execution holds prompt authoring and refinement. Visibility shows the accumulating artifact as sections commit.",
      "When a step is saved, its result lands in the matching section—state becomes observable instead of inferred. The triptych visual shows each commit updating the live document.",
      "We iterated through multiple rounds of testing and stakeholder review before the model informed product direction.",
    ],
    outcome: [
      "The work replaced an implicit prompt chain with observable progress: when a step saves, which section updates, and how the report assembles.",
      "The triptych became a shared reference for discussing state, surface ownership, and expected behavior during execution—useful beyond design reviews.",
      "The experience became accessible to more users, reduced reliance on prompt expertise, and aligned with how enterprise teams review document workflows.",
    ],
  },
  visuals: {
    overview: "original-model",
    challenge: "workflow-challenge",
    approach: "triptych-architecture",
    outcome: "triptych-product",
  },
  visualLabels: {
    overview: {
      label: "Original model",
      text: "Baseline workflow UI before the triptych redesign: step-by-step generation with state and assembly remaining implicit.",
    },
    challenge: {
      label: "Challenge",
      text: "Workflows are step-based, but meaningful work happens inside a single execution surface.",
    },
    approach: {
      label: "Structure → Execution → Visibility",
      text: "Separating structure, execution, and system visibility so each step is inspectable and predictable.",
    },
    outcome: {
      label: "In product",
      text: "The triptych applied in a working interface—each step generates, commits, and updates visible system state.",
    },
  },
};
