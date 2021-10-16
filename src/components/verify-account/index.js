import { useState } from "react"
import HorizontalBorder from "../../utils/HorizontalBorder";
import AccountNumber from "./AccountNumber";
import Bvn from "./Bvn";
import Button from "../../utils/Button";

const VerifyAccount = ({onHandleClick}) => {
  const [bvn, setBvn] = useState(true)
  
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
        
        <HorizontalBorder/>

        <Button text="Continue" onHandleClick={onHandleClick}/>
      </form>
    )
}

export default VerifyAccount
