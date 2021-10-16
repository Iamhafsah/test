import BlueCheck
 from "../assets/BlueCheck";
const onboardingSteps = [
    {number:1, title: "Verify Account"},
    {number:2, title: "Social Handles"},
    {number:3, title: "Business Category"}
]

const OnboardingSteps = ({activeStep, setActiveStep}) => {
    return (
        <div>

        <ul className="onboarding-steps">
            {onboardingSteps.map(step => {
                const active = activeStep === step.number;
                const completed = activeStep > step.number;

                return(
                    <li key={step.number} className={active ? "active-title" : "inactive-title"}>

                        <span className={completed ? "completed-step" : active ? "active-step" : "inactive-step"} onClick={() => setActiveStep(step.number)}>{completed ? <BlueCheck/> : (<>{step.number}</>)}</span>

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
