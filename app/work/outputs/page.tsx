import { CaseStudyTemplate } from "@/components/CaseStudyTemplate";

const overview = [
  "The system could generate content quickly, but users still exported it to Word to make it usable. They had to rebuild heading hierarchy, adjust formatting, and manually align output to organizational standards.",
  "That meant generation speed did not translate to delivery speed. The final mile still depended on manual cleanup outside the product.",
  "My role was to define a model that treated generated content as a structured artifact, so section hierarchy and formatting intent could survive from workflow steps into the final document.",
];

const challenge = [
  "The core issue was output usability, not generation. Enterprise teams needed deliverables that matched templates, hierarchy rules, and readability standards, not flat text blocks.",
  "At the time, outputs were difficult to scan, inconsistent in structure, and disconnected from real document expectations. Users regularly exported results to Word and reformatted by hand.",
  "The structural disconnect was critical: workflows defined content in steps, but that structure did not reliably carry through into the resulting document. Even strong workflows still produced artifacts that required significant rework.",
];

const approach = [
  "A key realization from early exploration was that the workflow already contained structure, but the product was not preserving it through to output.",
  "I treated this as a system problem, not a formatting feature. First, I mapped workflow steps directly to document hierarchy so each step could produce a predictable section, subsection, or body block.",
  "Then I used markdown as a transport layer for formatting intent, allowing structure to move from generation into render without flattening.",
  "I separated content from presentation so the same generated sections could be rendered in different visual styles without duplicating generation logic.",
  "I also explored a styling interaction model where selecting one element highlights similar elements across the document, then applies style changes globally or locally with immediate visual feedback.",
  "Finally, I explored template bootstrapping from existing documents, extracting hierarchy and style patterns so teams could adopt the system using real artifacts instead of blank templates.",
];

const outcome = [
  "This work established a foundation for treating AI output as a structured document system rather than raw text generation. Workflow logic, section hierarchy, and presentation rules were connected in one model.",
  "Even though much of the work remained exploratory, it shifted product direction toward an end-to-end experience where generation and usability are part of the same flow.",
  "From a product perspective, it reframed value from faster drafting to faster usable deliverables, reducing reformatting overhead in enterprise documentation workflows.",
  "It also reinforced a design principle I continue to use: AI speed is only valuable when resulting content is immediately usable.",
];

export default function OutputsPage() {
  return (
    <CaseStudyTemplate
      title="Structured AI Outputs"
      subtitle="A case study on transforming AI-generated content into structured, reusable artifacts that better fit real-world enterprise documentation needs."
      hook="AI-generated content is only useful when it becomes a document people can actually use."
      currentCaseStudyHref="/work/outputs"
      overview={overview}
      overviewVisual="Unstructured output"
      challenge={challenge}
      challengeVisual="Formatting gap"
      approach={approach}
      approachVisual="Workflow to document system"
      outcome={outcome}
      outcomeVisual="Structured output"
    />
  );
}
