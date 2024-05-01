import { useContext } from "react"
import { AuthContext } from "../contexts/AuthContext"
import { Navigate, useLocation } from "react-router-dom"

export const ProtectedRoute = ({children}) => {
    const {isLoggedIn} = useContext(AuthContext)
    const location = useLocation();
  return isLoggedIn ? children : <Navigate to="/login" state={{from:location}}/>
}
