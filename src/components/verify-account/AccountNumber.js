import {useState} from 'react'
import Input from "../../utils/Input"
import Select from "../../utils/Select"
import HorizontalBorder from '../../utils/HorizontalBorder'
import Button from "../../utils/Button";

const AccountNumber = () => {
    const [accNo, setAccNo] = useState('');
    const filled = accNo === '' ? false : true;
    const accountVerified = filled;

    const accountInputChange = (e) => setAccNo(e.target.value);

    return (
        <>
        <div className="account-number-form">
            <Input
            label="account-number"
            text="Account Number"
            value={accNo} onChange={accountInputChange} setInputValue={setAccNo} required
            />
            {accNo}

            <Select
            label="bank"
            title="Select Bank"
            name="banks"
            val1="GTB"
            val2="Sterling"
            val3="Access"
            optional
            />
        </div>

        <HorizontalBorder/>

        <Button text="Continue" isVerified={accountVerified}/>
        </>
    )
}

export default AccountNumber
