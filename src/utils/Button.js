const Button = ({text, extraStyle, onHandleClick}) => {
    return (
        <div className="page-button-div" >
        <span></span>
        <button className={`${extraStyle} page-button`} onClick={onHandleClick} type="submit">
           {text}
        </button>
        </div>
    )
}

export default Button
