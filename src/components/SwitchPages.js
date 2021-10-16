import BusinessCategory from "./BusinessCategory"
import SocialHandles from "./SocialHandles"
import Success from "./Success"
import VerifyAccount from "./verify-account"

const SwitchPages = ({step, onHandleClick}) => {
    switch(step){
        case 1:
            return(
                <VerifyAccount onHandleClick={onHandleClick}/>
            )
        case 2:
            return(
                <SocialHandles onHandleClick={onHandleClick}/>
            )
        case 3:
            return(
                <BusinessCategory onHandleClick={onHandleClick}/>
            )
        default:
            return(
                <Success/>
            );
    }
}

export default SwitchPages
