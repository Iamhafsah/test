import Select from "../utils/Select"
import HorizontalBorder from "../utils/HorizontalBorder"
import Button from "../utils/Button"

const BusinessCategory = ({onHandleClick}) => {
    return (
        <div className="business-category">
            <h2>Business Category</h2>

            <div className="categories">
                <div className="business-type">
                    <Select
                        label="business-type"
                        title="Type of your business"
                        name="business"
                        val1="Food"
                        val2="Agriculture"
                        val3="Fashion"
                    />
                </div>

                <Select
                    label="business-category"
                    title="Business Category"
                    name="category"
                    val1="Health"
                    val2="Education"
                    val3="Finance"
                />
            </div>

            <p className="pos">Do you use POS machines for your business?</p>

            <div className="pos-options">
                <button>Yes</button>
                <button>No</button>
            </div>

            <HorizontalBorder/>

            <Button text="Complete" onHandleClick={onHandleClick} extraStyle="blue-button" />
        </div>
    )
}

export default BusinessCategory
