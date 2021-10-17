const Input = ({label, text, social, extraStyle, inputValue, setInputValue, optional}) => {
const empty = inputValue === '';

   const handleChange = (e) => setInputValue(e.target.value)
    return (
        <div>
            <label htmlFor={label}>{text}</label> <br/> 
            {empty && <span className="empty-input" >!</span>}
            <input type="text" className={`${extraStyle} account-input` }  placeholder={social ? "@" : ""} value={inputValue} onChange={!optional && handleChange} required /> <br/>
        </div>
    )
}

export default Input
