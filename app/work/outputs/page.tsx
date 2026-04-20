import { CaseStudyTemplate } from "@/components/CaseStudyTemplate";

const overview = [
  "Following the introduction of workflows, a new problem became clear: while the system could generate structured content, the outputs themselves were not immediately usable. Users still needed to copy results into external tools like Word to apply formatting, adjust hierarchy, and meet organizational standards.",
  "This created a gap between generation and usability. AI accelerated content creation, but the final mile of producing a usable document still required manual effort outside the system.",
  "I focused on defining a system that could bridge this gap by treating output not as raw text, but as a structured, reusable artifact. This required rethinking how workflows, formatting, and styling worked together as a cohesive system.",
];

const challenge = [
  "The core issue was not content generation, but output usability. Enterprise users do not need unstructured text -- they need documents that follow specific formats, templates, and visual standards.",
  "The system at the time produced outputs that were:",
  "- flat and difficult to scan\n- inconsistent in hierarchy\n- disconnected from real-world document expectations",
  "Users routinely exported content to Word to reformat it, which introduced friction and reduced the overall value of the product.",
  "There was also a structural disconnect. Workflows defined how content was generated, but that structure did not reliably carry through to the final output. This meant that even well-designed workflows did not result in clean, usable documents.",
];

const approach = [
  "I approached this as a system design problem rather than a formatting feature.",
  "First, I established that workflows already contained implicit structure. Each step represented a logical section of content, similar to how hierarchical data is defined in formats like YAML. To preserve that structure, we leveraged markdown as a translation layer, allowing formatting intent to travel from the workflow system into the rendered output.",
  "Next, I defined a document model layered on top of workflow outputs. This model mapped workflow structure directly to document hierarchy, enabling outputs to be organized into headers, sub-sections, and body content in a predictable way.",
  "A key design decision was to separate content from presentation. Workflows defined the content and structure, while a styling system defined how that content should appear. This made it possible to apply different visual formats to the same underlying content without duplicating logic.",
  "I also explored a more accessible styling interaction model. Instead of abstract configuration, users could select elements within a document and see all similar elements highlighted. Styling changes could then be applied globally or locally with immediate visual feedback, making the system easier to understand and control.",
  "Finally, I explored how existing documents could be used to bootstrap the system. By uploading real examples, it became possible to extract structure and styling patterns and convert them into reusable templates, reducing the effort required to adopt the system.",
];

const outcome = [
  "This work established a foundation for treating AI outputs as structured documents rather than raw text. It connected workflow logic to real-world artifacts, reduced reliance on external tools, and introduced a more flexible system for managing formatting and presentation.",
  "While much of this work was exploratory and not fully shipped, it helped shift the product direction toward a more complete end-to-end experience, where generation and usability were part of the same system.",
  "More broadly, the project reinforced a key principle that continues to guide my work: AI systems are only valuable when their outputs can be used immediately. Speed alone is not enough -- structure, clarity, and presentation are essential to making AI-generated content truly useful.",
];

export default function OutputsPage() {
  return (
    <CaseStudyTemplate
      title="Structured AI Outputs"
      subtitle="A case study on transforming AI-generated content into structured, reusable artifacts that better fit real-world enterprise documentation needs."
      overview={overview}
      challenge={challenge}
      approach={approach}
      outcome={outcome}
    />
  );
}
