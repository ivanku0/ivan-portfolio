import { CaseStudyTemplate } from "@/components/CaseStudyTemplate";
import OriginalWorkflowModel from "@/components/OriginalWorkflowModel";
import TriptychProduct from "@/components/TriptychProduct";
import WorkflowChallenge from "@/components/WorkflowChallenge";
import TriptychVisual from "@/components/TriptychVisual";

const overview = [
  "I worked on the workflow experience for LIGER, an AI platform used to support structured content generation in enterprise environments. The goal was to move beyond one-off prompting and toward repeatable, multi-step workflows that could better support real production work.",
  "This effort sat at the intersection of product design, research, and systems thinking. I helped define the UX direction for workflows, conducted usability testing on early concepts, and translated those findings into a clearer interaction model that could better support both structure and flexibility.",
  "The work also reflected a broader tension in AI product design: teams want the speed of AI, but still need clarity, quality, and confidence in the outputs being produced.",
];

const challenge = [
  "The workflow experience lacked a clear mental model. Workflow authoring and execution were split across different parts of the product, and neither area clearly reinforced the concept of a workflow as a unified system. As a result, users often struggled to understand what workflows were for or when they were more useful than standard chat.",
  "This challenge was amplified by low AI competency across the audience. Many users did not naturally think in structured steps, nor did they have a strong sense of how input choices would shape downstream outputs. In practice, that meant the system often required a level of specificity and planning that users were not yet prepared to provide.",
  "There was also a product positioning challenge. For many common enterprise writing tasks, standard chat already handled a large portion of the job. That made it difficult for users to immediately understand the value of a stepped workflow model, especially when the system did not yet make its structure or benefits obvious.",
];

const approach = [
  "I began by evaluating the existing workflow experience through usability testing and synthesis. The findings made it clear that the problem was not only usability, but legibility: users could not reason about how the system worked before execution, and they had limited confidence in the relationship between steps, inputs, and outputs.",
  "The original model was largely linear and execution-focused, with a step explorer and a prompt interface organized around inputs and outputs. To improve system understanding, I introduced a third layer: a preview and exploration space that gave users a broader view of the workflow as a system. This became a triptych model that separated structure, execution, and preview into distinct but connected parts of the experience.",
  "That intervention improved clarity for more defined, document-driven workflows, but it also revealed an important limit. The model worked best when the work itself was already linear and well understood. As the use cases broadened, it became clear that the system needed to support more exploratory and evolving patterns of work as well. This led to a broader design shift: from enforcing a rigid sequence toward building a workflow system that could better support multiple modes of thinking over time.",
];

const outcome = [
  "This work helped establish a stronger conceptual foundation for workflows inside the product. It influenced product direction, introduced a more legible interaction model, and created a reusable framework for thinking about AI-supported workflows beyond simple prompt-response interactions.",
  "While the product was still evolving and I do not have released metrics to cite, the impact was meaningful at the system level. The work aligned cross-functional teams around a clearer model, surfaced the limitations of overly rigid workflow structures, and established a path toward more flexible, enterprise-ready workflow experiences.",
  "More broadly, the project sharpened an important lesson that continues to shape how I approach AI design: speed alone is not enough. AI systems need to help people understand what is happening, what they can trust, and how structure should be introduced without overwhelming the user.",
];

export default function WorkflowsPage() {
  return (
    <CaseStudyTemplate
      title="AI Workflows"
      subtitle="A case study on designing AI-supported workflows that help teams move faster while preserving quality, accountability, and human judgment in production environments."
      hook="AI workflows fail when users cannot predict what will happen before they run."
      currentCaseStudyHref="/work/workflows"
      overview={overview}
      overviewVisual={{
        label: "ORIGINAL MODEL",
        text: "The baseline workflow UI before the triptych redesign: step-by-step generation with state and assembly remaining implicit.",
        bare: true,
        content: (
          <div className="mb-14 mt-12 md:mb-16 md:mt-14">
            <OriginalWorkflowModel />
          </div>
        ),
      }}
      challenge={challenge}
      challengeVisual={{
        variant: "large",
        label: "CHALLENGE VISUAL",
        text: "Workflows are step-based, but all meaningful work happens inside a single execution surface.",
        bare: true,
        content: (
          <div className="mb-14 mt-12 md:mb-16 md:mt-14">
            <WorkflowChallenge />
          </div>
        ),
      }}
      approach={approach}
      approachVisual={{
        label: "STRUCTURE → EXECUTION → VISIBILITY",
        text: "Traditional workflows collapse definition and output into a single surface. This model separates structure, execution, and system visibility—making each step inspectable and predictable.",
        bare: true,
        content: (
          <div className="mb-16 mt-14 md:mt-16">
            <TriptychVisual />
          </div>
        ),
      }}
      outcome={outcome}
      outcomeVisual={{
        label: "IN PRODUCT",
        text: "The triptych model applied in a working interface—where each step generates, commits, and contributes to a visible system state.",
        bare: true,
        content: (
          <div className="mt-10 md:mt-12">
            <TriptychProduct />
          </div>
        ),
      }}
    />
  );
}
