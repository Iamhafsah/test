import ArrowDown from "../assets/ArrowUp";

const Select = ({label,title, name, val1, val2, val3,selectValue, setSelect, optional}) => {
    
    const onSelectChange = (e) => setSelect(e.target.value);

    return (
        <div>
            <label htmlFor={label}>{title}</label> <br/> 
            <div className="select">
                <div style={{display: "flex", alignItems: "center"}}>
                    <select name={name} id={name} value={selectValue} onChange={!optional && onSelectChange}>
                        <option></option>
                        <option value={val1}>{val1}</option>
                        <option value={val2}>{val2}</option>
                        <option value={val3}>{val3}</option>
                    </select>
                    <ArrowDown/>
                </div>
            
            </div>
        </div>
    )
}

export default Select
