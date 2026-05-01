import { CaseStudyTemplate } from "@/components/CaseStudyTemplate";
import OriginalWorkflowModel from "@/components/OriginalWorkflowModel";
import TriptychProduct from "@/components/TriptychProduct";
import WorkflowChallenge from "@/components/WorkflowChallenge";
import TriptychVisual from "@/components/TriptychVisual";

const overview = [
  "Users could complete each step in the workflow, but could not predict the final document. Prompting, generation, and editing happened in one execution surface, while the final report was assembled elsewhere and stayed invisible during execution.",
  "My Role: I led design and definition of the triptych interaction model, shifting the experience from a prompt-heavy interface to one where step structure, execution, and resulting content were clearly separated. I produced interaction diagrams, high-fidelity prototypes, and research synthesis to guide product and engineering decisions.",
  "This addressed a practical product gap. Teams wanted fast AI-assisted writing, but they also needed to see when a step was complete, which section was updated, and how the final artifact was taking shape.",
];

const challenge = [
  "The system was organized into steps, but meaningful interaction was concentrated in one execution area. Users wrote prompts, ran generation, and edited responses in place, yet could not see how those changes were assembled into the final report.",
  "State was hard to inspect. Users had to infer whether a step was complete, whether content was committed, and which step produced each section. Even when the system worked, people were unsure what would happen next.",
  "In the challenge visual, interaction is concentrated inside Execution while Document sits detached. The product exposed step labels, but not the relationship between step actions and the resulting artifact.",
];

const approach = [
  "Early usability testing showed a clear turning point: even when participants completed steps correctly, they still could not explain how the document was being constructed.",
  "I reframed the model into three layers: Structure, Execution, and Visibility. Structure defines ordered steps, Execution contains prompt authoring and refinement, and Visibility shows the accumulating artifact as sections are committed.",
  "This separation addressed the collapse in the original model. As each step is saved, its result is reflected in the corresponding section, making state explicit through observable events instead of inference. In the triptych visual, each step commits output to the document, so users can track how sections are built over time.",
  "The designs were iterated through multiple rounds of usability testing and stakeholder review before informing product direction.",
];

const outcome = [
  "The work replaced an implicit prompt chain with a model where progress is observable: teams can see when a step is saved, which section it updated, and how the final report is assembled.",
  "It also improved cross-functional alignment. The triptych became a shared reference for discussing state, ownership of each surface, and expected behavior during execution.",
  "This made the experience accessible to a broader range of users, reduced reliance on prompt expertise, and aligned the product with enterprise document workflows.",
  "More broadly, it reinforced a design principle I continue to use: AI speed matters, but trust comes from making system behavior inspectable at each step.",
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
