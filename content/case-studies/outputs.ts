import type { CaseStudyContent } from "@/content/types";

export const outputsCaseStudy: CaseStudyContent = {
  slug: "outputs",
  splash: "outputs",
  card: {
    title: "Structured AI Outputs",
    description:
      "Mapped workflow steps to document hierarchy so AI-generated content could ship as structured, styled Word-ready deliverables—not flat text blocks.",
  },
  page: {
    title: "Structured AI Outputs",
    subtitle:
      "When generation was fast but export still meant hours in Word, I defined a model that preserved section hierarchy from workflow steps through to the final document.",
    hook: "AI-generated content is only useful when it becomes a document people can actually use.",
    metaDescription:
      "Case study on turning AI-generated content into structured, enterprise-ready documents.",
  },
  sections: {
    overview: [
      "The system generated content quickly, but users still exported to Word to make it usable—rebuilding headings, fixing formatting, and aligning output to org standards.",
      "Generation speed did not translate to delivery speed. The last mile depended on manual cleanup outside the product.",
      "I defined a model that treated generated content as a structured artifact, so hierarchy and formatting intent could survive from workflow steps into the final document.",
    ],
    challenge: [
      "The issue was output usability, not generation. Enterprise teams needed deliverables that matched templates, hierarchy rules, and readability—not unstructured text.",
      "Outputs were hard to scan, inconsistent in structure, and disconnected from real document expectations. Export-and-reformat was the default path.",
      "Workflows defined content in steps, but that structure did not reliably carry through to the resulting document. Strong workflows still produced artifacts that needed heavy rework.",
    ],
    approach: [
      "The workflow already contained structure; the product was not preserving it through to output.",
      "I mapped workflow steps directly to document hierarchy so each step could produce a predictable section, subsection, or body block.",
      "Markdown became a transport layer for formatting intent, letting structure move from generation into render without flattening.",
      "I separated content from presentation so the same sections could render in different visual styles without duplicating generation logic.",
      "I also explored global style application—select one element, highlight similar elements, apply changes locally or across the document—and template bootstrapping from existing Word files.",
    ],
    outcome: [
      "The work established a foundation for treating AI output as a document system: workflow logic, section hierarchy, and presentation rules connected in one model.",
      "Much of the exploration stayed ahead of implementation, but it shifted direction toward an end-to-end flow where generation and usability are the same problem.",
      "Value reframed from faster drafting to faster usable deliverables—less reformatting overhead in enterprise documentation workflows.",
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
      text: "Flat generated text before hierarchy and styling are applied.",
    },
    challenge: {
      label: "Formatting gap",
      text: "Workflow structure exists, but the exported document does not inherit it.",
    },
    approach: {
      label: "Workflow to document",
      text: "Steps map to sections; markdown carries structure into render.",
    },
    outcome: {
      label: "Structured output",
      text: "Generated content arrives as a document teams can review and ship.",
    },
  },
};
