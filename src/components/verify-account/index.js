import { useState } from "react"
import AccountNumber from "./AccountNumber";
import Bvn from "./Bvn";

const VerifyAccount = () => {
  const [bvn, setBvn] = useState(true);
  
  const onChooseBvn = (e) =>{
    e.preventDefault();
    setBvn(true)
  }
  const onChoosePan = (e) =>{
    e.preventDefault();
    setBvn(false)
  }

    return (
        <form className="verify-account-form">
        <h2>Verify Account</h2>

        <p>Select a verification method</p>
        <div className="verify-account-div">
          <button onClick={onChooseBvn}>BVN</button>
          <button onClick={onChoosePan}>Personal Account Number</button>
        </div>

        {bvn === true ? (
          <Bvn/>
        ): (
          <AccountNumber/>
        )}
        
      </form>
    )
}

export default VerifyAccount
