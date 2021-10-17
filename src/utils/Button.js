import {useContext} from 'react'
import {stepContext} from '../components/Onboarding'


const Button = ({text, extraStyle, logout, isVerified}) => {

    const {step, setStep} = useContext(stepContext);
    const onHandleClick = (e) => {
        e.preventDefault();
        if(isVerified === true)setStep(step + 1)
    }

    return (
        <div className="page-button-div" >
        <span></span>
        <button className={`${extraStyle} page-button`} onClick={!logout &&  onHandleClick} type="submit">
           {text}   
        </button>
        </div>
    )
}

export default Button
