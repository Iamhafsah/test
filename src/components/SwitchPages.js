import BusinessCategory from "./BusinessCategory"
import SocialHandles from "./SocialHandles"
import Success from "./Success"
import VerifyAccount from "./verify-account"

const SwitchPages = ({step}) => {
    switch(step){
        case 1:
            return(
                <VerifyAccount />
            )
        case 2:
            return(
                <SocialHandles />
            )
        case 3:
            return(
                <BusinessCategory />
            )
        default:
            return(
                <Success/>
            );
    }
}

export default SwitchPages
