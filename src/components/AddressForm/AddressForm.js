import { useContext } from "react"
import "./AddressForm.css"
import { UserDetailsContext } from "../../contexts/UserDetailsContext"
import { ToastContext } from "../../contexts/ToastContext"

export const AddressForm = () => {

    const { setIsAddressFormOpen, formSubmitHandler, fillData, dummyData, updateAddressFormHandler } = useContext(UserDetailsContext)
    const {notify} = useContext(ToastContext)

    return (<div className="addressMain">
        <div className="addressComponent">
            <div className="addressComponentHeader">
                <h3>Add New Address</h3>
            </div>
            <form onSubmit={(e) => {notify("addressUpdated");formSubmitHandler(e)}} className="addressComponentDetailsForm">
                <div className="inputFieldsDiv">
                    <input type="hidden" name="id" defaultValue={fillData.id} />
                    <input type="text" name="firstName" className="inputField" placeholder="Enter First Name" defaultValue={fillData.firstName} required />
                    <input type="text" name="lastName" className="inputField" placeholder="Enter Last Name" defaultValue={fillData.lastName} required />
                    <input type="text" name="street" className="inputField" placeholder="Enter Street" defaultValue={fillData.street} required />
                    <input type="text" name="district" className="inputField" placeholder="Enter District" defaultValue={fillData.district} required />
                    <input type="text" name="state" className="inputField" placeholder="Enter State" defaultValue={fillData.state} required />
                    <input type="text" name="pinCode" className="inputField" placeholder="Enter Pincode" defaultValue={fillData.pinCode} required />
                    <input type="text" name="phone" className="inputField" placeholder="Enter Mobile Number" defaultValue={fillData.phone} required />
                </div>
                <div className="formBtns">
                    <button type="submit" className="formBtn">Save</button>
                    <button type="button" onClick={() => setIsAddressFormOpen(false)} className="formBtn btn-cancel">Cancel</button>
                    <button type="button" className="formBtn btn-dummy" onClick={() => updateAddressFormHandler(dummyData)} disabled={fillData?.id?.length > 0 ? true : false}>Add Dummy Data</button>
                </div>
            </form>
        </div >
    </div >)
}