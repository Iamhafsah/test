import Input from "../utils/Input"
import HorizontalBorder from "../utils/HorizontalBorder"
import Button from "../utils/Button"

const SocialHandles = ({onHandleClick}) => {
    return (
        <form className="social-handles">
            <h2>Social Handles</h2>
            <p>Enter your business social media handles</p>

            {/* abeg tag */}
            <div>
            <Input
            social
            label="abeg-tag"
            text="Choose your Abeg Tag (required)"
            />
            </div>

            {/* social media */}
            <div className="social-media">
            
            <Input
            social
            label="instagram"
            text="Instagram"
            />

            <Input
            social
            label="Twitter"
            text="Twitter"
            extraStyle="twitter-input"
            />

            </div>
            
            <HorizontalBorder/>

            <Button text="Confirm Social Handles" onHandleClick={onHandleClick} extraStyle="social-complete-button"/>
        </form>
    )
}

export default SocialHandles
