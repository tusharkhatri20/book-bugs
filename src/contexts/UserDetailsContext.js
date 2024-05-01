import { v4 as uuid } from "uuid";
import { createContext, useState } from "react";
import { users } from "../backend/db/users";

export const UserDetailsContext = createContext();
export const UserDetailsProvider = ({ children }) => {
    const[allUsers,setAllUsers] = useState(users);
    // const usersValue = {all}
    const [currentUser, setCurrentUser] = useState(allUsers[0]);
    const [addresses, setAddresses] = useState(currentUser?.addresses);
    const [currentAddress, setCurrentAddress] = useState(currentUser?.addresses[0]);
    const [isAddressFormOpen, setIsAddressFormOpen] = useState(false);



    const dummyData = {
        id: null,
        firstName: "Dummy",
        lastName: "User",
        street: "Dummy Street, Dummy Road",
        district: "DummyDistrict",
        state: "DummyState",
        pinCode: "123456",
        phone: "123456789"
    }

    const emptyFormData = {
        id: null,
        firstName: "",
        lastName: "",
        street: "",
        district: "",
        state: "",
        pinCode: "",
        phone: ""
    }
    const [fillData, setFillData] = useState(emptyFormData)


    const currentAddressSelector = (item) => {
        setCurrentAddress(item);
    }

    const formSubmitHandler = (e) => {
        setIsAddressFormOpen(false);

        e.preventDefault();
        const form = e.target;
        const formData = new FormData(form);
        const getAddress = Object.fromEntries(formData.entries());

        if (getAddress.id === '') {
            const newAddress = { ...getAddress, id: uuid() };
            setAddresses([...addresses, newAddress]);
        } else {
            setAddresses([...addresses].map((addr) => addr.id === getAddress.id ? getAddress : addr))
        }

    }

    const updateAddressFormHandler = (item) => {
        setIsAddressFormOpen(true);
        setFillData(item);
    }
    const deleteAddressFormHandler = (id) => {
        const newAddresses = addresses.filter((addr) => addr.id !== id)
        setAddresses(newAddresses)
    }






    return (<UserDetailsContext.Provider value={{ isAddressFormOpen, setIsAddressFormOpen, addresses, currentAddress, currentUser, currentAddressSelector, formSubmitHandler, updateAddressFormHandler, deleteAddressFormHandler, fillData, setFillData, emptyFormData, dummyData,allUsers,setCurrentUser,setAddresses,setAllUsers,setCurrentAddress,}}>
        {children}
    </UserDetailsContext.Provider>)
}