const Input = ({label, text, social, extraStyle}) => {
    return (
        <div>
            <label htmlFor={label}>{text}</label> <br/>
            <input type="text" className={`${extraStyle} account-input`}  placeholder={social ? "@" : ""} required/> <br/>
        </div>
    )
}

export default Input
