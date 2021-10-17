const Input = ({label, text, social, extraStyle, inputValue, setInputValue, optional}) => {
const empty = inputValue === '';

   const handleChange = (e) => setInputValue(e.target.value)          
        const emptyInput = empty ? "empty-input" : "";

    return (
        <div>
            <label htmlFor={label}>{text}</label> <br/> 
            
           <input type="text" className={`${extraStyle} ${emptyInput} account-input` }  placeholder={social ? "@" : ""} value={inputValue} onChange={!optional && handleChange} required /> <br/>
        </div>
    )
}

export default Input
