import {useState} from 'react'
import Input from "../utils/Input"
import HorizontalBorder from "../utils/HorizontalBorder"
import Button from "../utils/Button"

const SocialHandles = () => {
    const [abeg, setAbeg] = useState('');
    const filled = abeg === '' ? false : true;
    const abegVerified = filled;

    const abegInputChange = (e) => setAbeg(e.target.value)

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
            inputValue={abeg} handleChange={abegInputChange} setInputValue={setAbeg}
            />
            </div>

            {/* social media */}
            <div className="social-media">
            
            <Input
            social
            label="instagram"
            text="Instagram"
            optional
            />

            <Input
            social
            label="Twitter"
            text="Twitter"
            extraStyle="twitter-input"
            optional
            />

            </div>
            
            <HorizontalBorder/>

            <Button text="Confirm Social Handles" isVerified={abegVerified}/>
        </form>
    )
}

export default SocialHandles
