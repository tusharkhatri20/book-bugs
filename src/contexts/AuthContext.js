import { createContext, useContext, useState } from "react"
import { UserDetailsContext } from "./UserDetailsContext";
import { ToastContext } from "./ToastContext";
import { useLocation, useNavigate } from "react-router";
import { formatDate } from "../backend/utils/authUtils";
import { v4 as uuid } from "uuid";

export const AuthContext = createContext();
export const AuthProvider = ({children}) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const { notify } = useContext(ToastContext);

  const {allUsers, setCurrentUser,setAddresses,setAllUsers,setCurrentAddress} = useContext(UserDetailsContext);


  const emptyLoginFormData = {
      email:"",
      password:""
  }
  const dummyLoginData = {
    email:allUsers[0].email,
    password:allUsers[0].password
  }

  const [fillLoginData, setFillLoginData] = useState(emptyLoginFormData)

  const location = useLocation();
  const navigate = useNavigate();
  let userDetailsExists = null;

  const loginSubmitHandler = (e) => {
    e.preventDefault();
    const form = e.target;
    const formData = new FormData(form);
    const getLoginDetails = Object?.fromEntries(formData?.entries());
    
    userDetailsExists = allUsers?.find((user) => user?.email === getLoginDetails.email && user?.password === getLoginDetails.password)


    navigateuser();
   
  }

    const navigateuser = () => 
 {  
  if( userDetailsExists) {
    setIsLoggedIn(true);
    setCurrentUser(userDetailsExists);
    setAddresses(userDetailsExists?.addresses);
    notify("userLoggedIn");
    setFillLoginData(emptyLoginFormData);
    location?.state?.from ? navigate(location?.state?.from?.pathname) : navigate("/")
    }
    else{ 
      notify("emailPasswordIncorrect")
    };
  }


  
  const signUpFormSubmitHandler = (e) => {
    e.preventDefault();
    const form = e.target;
    const formData = new FormData(form);
    const getNewUserDetails = Object.fromEntries(formData.entries());
    const newUser = { ...getNewUserDetails, _id: uuid(), createdAt: formatDate(),updatedAt: formatDate(), addresses:[]};


    setAllUsers([...allUsers, newUser])
    setIsLoggedIn(true);
    setCurrentUser(newUser);
    setAddresses(newUser?.addresses);
    setCurrentAddress(undefined);
    notify("userLoggedIn");
  
    location?.state?.from ? navigate(location?.state?.from?.pathname) : navigate("/")
  
  }







const fillLoginDataHandler = (data) => {
  setFillLoginData(data)
}







  


   
  return (
    <AuthContext.Provider value={{isLoggedIn, setIsLoggedIn,loginSubmitHandler,userDetailsExists,fillLoginData, fillLoginDataHandler,dummyLoginData,signUpFormSubmitHandler}}>
        {children}
    </AuthContext.Provider>
  )
}
