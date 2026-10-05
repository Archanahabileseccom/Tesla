import ProcessStep from "./ProcessStep";

function ProcessTimeline({ steps = [] }) {
  return (
    <div className="process-timeline">

      {steps.map((step, index) => (
        <ProcessStep
          key={index}
          number={step.number || String(index + 1).padStart(2, "0")}
          title={step.title}
          description={step.description}
        />
      ))}

    </div>
  );
}

export default ProcessTimeline;