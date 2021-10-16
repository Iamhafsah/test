import Input from "../../utils/Input"
import Select from "../../utils/Select"

const AccountNumber = () => {
    return (
        <form className="account-number-form">
            <Input
            label="account-number"
            text="Account Number"
            />

            <Select
            label="bank"
            title="Select Bank"
            name="banks"
            val1="GTB"
            val2="Sterling"
            val3="Access"
            />
        </form>
    )
}

export default AccountNumber
