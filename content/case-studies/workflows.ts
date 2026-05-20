import type { CaseStudyContent } from "@/content/types";

export const workflowsCaseStudy: CaseStudyContent = {
  slug: "workflows",
  splash: "workflows",
  card: {
    title: "Predictable AI Workflows",
    description:
      "Modernized a flagship enterprise AI workflow product—from a programmable prompt interface into a triptych model where structure, execution, and document output are visible as users work.",
  },
  page: {
    title: "Predictable AI Workflows",
    subtitle:
      "Led design on a triptych interaction model for an enterprise document AI platform: making step-based workflows legible to business users and solution engineers without turning them into prompt engineers.",
    hook: "AI workflows fail when users cannot predict what will happen before they run.",
    metaDescription:
      "Case study on redesigning enterprise AI workflow UX with a triptych model for structure, execution, and document visibility.",
  },
  sections: {
    overview: [
      "The product had been in production for over a year and was becoming a flagship capability shown to clients—but it still behaved more like a programmable prompt interface than a document creation tool. Users could run chained steps, yet non-technical enterprise users struggled to understand what the system was building or how the final report would assemble.",
      "I led the design and definition of the triptych interaction model in close collaboration with product and engineering: competitive analysis, research synthesis, interaction modeling, flows and prototypes, critiques and usability testing, and iteration on feasibility with a diverse audience—from business users to technical solution engineers.",
      "The work had to modernize the experience without abandoning a year of production architecture and familiar patterns, while the product was still pre-MVP in places and actively redefining direction.",
    ],
    challenge: [
      "Users could complete workflow steps, but they were not confident in what the system was producing. Prompting, editing, and generation all happened in one execution surface; outcomes felt implicit and hard to reason about.",
      "The legacy model was a two-pane flow: users progressed linearly through steps with little visibility into how outputs accumulated into a coherent document. State was inferred—completion, commitment, and section ownership were unclear even when generation worked.",
      "The challenge was not “users don’t get it.” It was a systems problem: structure, execution, and document assembly were collapsed into an overloaded surface, so people could navigate the workflow without understanding the artifact being produced.",
    ],
    approach: [
      "Usability testing made the gap concrete: participants completed steps correctly but could not explain how the document was being built. That became the design brief—repair the mental model, not add more prompts.",
      "I reframed the product into three layers. Structure defines ordered steps and grouping. Execution holds prompt authoring, generation, and refinement. Visibility shows the accumulating document as each step commits—so progress is observable, not guessed.",
      "We ran multiple rounds of critique, testing, and stakeholder alignment while engineering weighed scalability against legacy patterns. The goal was an extensible interaction model, not a one-off screen refresh.",
      "To communicate the model in portfolio and review settings, I directed an interactive prototype around resume analysis—a use case people understand without proprietary enterprise content. It simulates step progression, prompt runs, saved state, and live document assembly, including completion flows that reinforce confidence.",
    ],
    outcome: [
      "After the redesign direction, users could see prompts committed into visible document sections step by step. Structure, configuration, and output were separated into distinct layers, so each action had a clear relationship to the artifact.",
      "The triptych became a shared language across product, engineering, and stakeholders—for state, surface ownership, and what “done” means at each step. That reduced reliance on prompt expertise and made the flagship workflow easier to demo and defend to clients.",
      "The through-line for this work: diagnose broken mental models and redesign systems around how people actually think and work—then translate ambiguous AI behavior into a product model teams can build on.",
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
      text: "Legacy two-pane workflow: prompting and generation in one surface, with document assembly implicit and detached from execution.",
    },
    challenge: {
      label: "Challenge",
      text: "Structure, execution, and output collapsed—users could move through steps without seeing how the artifact was produced.",
    },
    approach: {
      label: "Structure → Execution → Visibility",
      text: "Three layers so each step is inspectable: schema on the left, configuration in the center, live document on the right.",
    },
    outcome: {
      label: "In product (prototype)",
      text: "Interactive resume-analysis flow demonstrating run, save, section commit, and progress—abstracted from proprietary enterprise content.",
    },
  },
};
