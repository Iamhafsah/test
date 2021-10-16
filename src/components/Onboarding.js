import { useState } from "react";
import Button from "../utils/Button";
import OnboardingSteps from "./OnboardingSteps";
import SwitchPages from "./SwitchPages";

function Onboarding() {
  const [step, setStep] = useState(1);

  const onHandleClick= () => {
    setStep(step + 1)
  }

  return (
    <div className="page-container">

    {/* the blue part at the left */}
    <div className="blue-part">
    </div>

    <section className="right-section">
        {/* logout button */}
        <Button text="Logout" extraStyle="red-button"/>

        {/* top section with the steps listed*/}
        <OnboardingSteps activeStep={step} setActiveStep={setStep}/>

        {/* step tracker */}
       {step <= 3 &&(<span className="step-tracker">Step {step} / 3</span>)}

        {/* The different steps of the form */}
        <SwitchPages step={step} onHandleClick={onHandleClick}/>

        </section>
    </div>
  );
}

export default Onboarding;
