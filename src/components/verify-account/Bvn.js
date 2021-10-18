import { useState } from "react";
import ArrowUp from "../../assets/ArrowDown";
import GreenCheck from "../../assets/GreenCheck";
import Lock from "../../assets/Lock";
import HorizontalBorder from '../../utils/HorizontalBorder'
import Input from '../../utils/Input'
import Button from "../../utils/Button";

const Bvn = () => {
    const [showBvn, setShowBvn] = useState(false);
    const [bvnNo, setBvnNo] = useState('');
    const filled = bvnNo === '' ? false : true;
    const bvnVerified = filled;

    const bvnInputChange = (e) => setBvnNo(e.target.value)

    return (
        <>

            <Input
            label="bvn"
            text="Bank Verification Number (11-digits)"
            inputValue={bvnNo} handleChange={bvnInputChange} setInputValue={setBvnNo}
            extraStyle="bvn-input" required
            />

            <div className="bvn-reason">
                <div className="bvn-label">
                    <span><Lock/> <span className="lock-span">Why we need your BVN</span></span>

                    <span onClick={() => setShowBvn(!showBvn)} className="bvn-show-hide"> <span>
                        {showBvn === true ? 'Hide ' : 'Show'}</span> <ArrowUp/></span>
                </div>

                {showBvn &&(
                    <div  className="disclaimer">
                    <span> We only need access to your:</span>
                    
                    <ul>
                        <li><GreenCheck/> Full Name</li>
                        <li><GreenCheck/> Phone Number</li>
                        <li><GreenCheck/> Date of Birth</li>
                    </ul>
        
                    <div className="bvn-bottom-border"></div>
                    <p>🔐
                        Your BVN does not give us access to your bank accounts or transactions
                    </p>
                    </div>
                )}
            
            </div>

            {showBvn && <>
                <HorizontalBorder/>

                <Button text="Continue" isVerified={bvnVerified}/>
            </>}
           
        </>
    )
}

export default Bvn
