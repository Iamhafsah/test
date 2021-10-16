import { useState } from "react";
import ArrowUp from "../../assets/ArrowDown";
import GreenCheck from "../../assets/GreenCheck";
import Lock from "../../assets/Lock";

const Bvn = () => {
    const [showBvn, setShowBvn] = useState(false);

    return (
        <>
            <label htmlFor="bvn">Bank Verification Number (11-digits)</label> <br/>
            <input type="text" className="bvn-input" required/>

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
        </>
    )
}

export default Bvn
