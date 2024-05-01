import { NavLink } from "react-router-dom";
import { NavigationBar } from "../../components/NavigationBar"
import "./PageNotFound.css"



export const PageNotFound = () => {


    return (
        <>

            <NavigationBar />

            <div className="pageNotFoundBox">
                <div className="pageNotFoundHeading">
                    <h2>Oops...</h2>
                </div>
                <div className="pageNotFound">
                    <h3>Something Went Wrong! Error Page Not Found</h3>
                    <NavLink to="/" className="redirectToHome">Go Back To Home Page</NavLink>
                </div>
            </div>
        </>
    )
}