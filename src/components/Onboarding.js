import { useState, createContext} from "react";
import Button from "../utils/Button";
import OnboardingSteps from "./OnboardingSteps";
import SwitchPages from "./SwitchPages";
import image from "../assets/card-image.png"

export const stepContext = createContext();


function Onboarding() {
  const [step, setStep] = useState(1);

  return (
    <stepContext.Provider value={{step, setStep}}>
    <div className="page-container">

    {/* the blue part at the left */}
    <div className="left-part">
      <img src={image} alt="hand and cards on a table" />
    </div>

    <section className="right-section">
        {/* logout button */}
        <Button logout text="Logout" extraStyle="red-button"/>

        {/* top section with the steps listed*/}
        <OnboardingSteps activeStep={step} setActiveStep={setStep}/>

        {/* step tracker */}
       {step <= 3 &&(<span className="step-tracker">Step {step} / 3</span>)}

        {/* The different steps of the form */}
        <SwitchPages step={step}/>
      </section>
    </div>
    </stepContext.Provider>
  );
}

export default Onboarding;
