import BlueCheck
 from "../assets/BlueCheck";

 
const onboardingSteps = [
    {number:1, title: "Verify Account"},
    {number:2, title: "Social Handles"},
    {number:3, title: "Business Category"}
]

const OnboardingSteps = ({activeStep, setActiveStep}) => {
    return (
        <div className="onboarding-div">

        <ul className="onboarding-steps">
            {onboardingSteps.map(step => {
                const active = activeStep === step.number;
                const completed = activeStep > step.number;
                
                const activeTitle = active ? "active-title" : "inactive-title";
                const completedStep = completed ? "completed-step" : active ? "active-step" : "inactive-step";

                return(
                    <li key={step.number} className={activeTitle}>
                        <span className={completedStep} onClick={() => setActiveStep(step.number)}>{completed ? <BlueCheck/> : (<>{step.number}</>)}</span>

                        <span className="step-title">{step.title}</span>
                </li>
                )
            }
            )}
        </ul>
        <div className="bottom-border"></div>
    </div>
    )
}

export default OnboardingSteps
