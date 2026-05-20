import type { CaseStudyContent } from "@/content/types";

export const outputsCaseStudy: CaseStudyContent = {
  slug: "outputs",
  splash: "outputs",
  card: {
    title: "Structured AI Outputs",
    description:
      "Connected workflow steps to document hierarchy so generated content could export as styled, Word-ready deliverables—without a manual reformatting pass.",
  },
  page: {
    title: "Structured AI Outputs",
    subtitle:
      "On the same enterprise document AI platform, I defined how step output becomes a structured artifact—so hierarchy and formatting intent survive from generation through export.",
    hook: "AI-generated content is only useful when it becomes a document people can actually use.",
    metaDescription:
      "Case study on preserving workflow structure in AI-generated documents for enterprise export.",
  },
  sections: {
    overview: [
      "The platform could generate content quickly, but the finish line was still Microsoft Word. Users exported results, rebuilt heading hierarchy, fixed spacing, and aligned output to org templates—generation speed did not translate to delivery speed.",
      "I owned the model for treating output as a structured document: how workflow steps map to sections, how formatting intent travels with content, and how presentation can change without regenerating prose.",
      "This work followed the triptych workflow redesign. Predictable steps were necessary but not sufficient—teams also needed the artifact itself to be usable the moment generation finished.",
    ],
    challenge: [
      "The problem was output usability, not model quality. Enterprise teams needed scanable hierarchy, template fidelity, and readable structure—not a wall of generated text.",
      "Export-and-reformat was the default path. Even when workflows were well designed, the resulting document often arrived flat: inconsistent headings, weak section boundaries, and no reliable link between a step and its place in the deliverable.",
      "Workflow logic lived in one layer; the Word doc lived in another. That gap is what made strong generation still feel like unfinished product work.",
    ],
    approach: [
      "The workflow already encoded structure—the product was not carrying it through to render and export.",
      "I mapped each step to a predictable place in the document hierarchy: section, subsection, or body block, so generation had a target shape instead of a text dump.",
      "Markdown became a transport layer for structure—headings, lists, emphasis—so formatting intent could move from step output into render without flattening.",
      "I separated content from presentation: the same generated sections could adopt different visual styles without duplicating generation logic.",
      "I also explored global style application (select one element, update similar elements across the doc) and bootstrapping templates from existing Word files so teams could start from real artifacts, not blank styles.",
    ],
    outcome: [
      "The work established a document-system foundation: workflow logic, section hierarchy, and presentation rules connected in one model.",
      "Much of the exploration stayed ahead of full implementation, but it shifted roadmap conversations from “generate faster” to “ship usable deliverables”—generation and formatting as one problem.",
      "For teams running policy reports, hiring packets, and client-facing documents, the win was fewer hours rebuilding structure in Word after the AI had already done the thinking.",
    ],
  },
  visuals: {
    overview: "outputs-overview",
    challenge: "outputs-challenge",
    approach: "outputs-approach",
    outcome: "outputs-outcome",
  },
  visualLabels: {
    overview: {
      label: "Unstructured output",
      text: "Fast generation, but the artifact arrives as flat text—not a document teams can ship.",
    },
    challenge: {
      label: "Formatting gap",
      text: "Steps encode structure; the exported Word doc often does not inherit it.",
    },
    approach: {
      label: "Workflow → document",
      text: "Steps map to hierarchy; markdown carries structure into styled render.",
    },
    outcome: {
      label: "Structured deliverable",
      text: "Headings, lists, and styles preserved—ready for review and export.",
    },
  },
};
