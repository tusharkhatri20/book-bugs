import { NavLink, useNavigate } from "react-router-dom"
import {NavigationBar} from "../../components/NavigationBar"
import "./SignUp.css"
import { useContext, useEffect, useState } from "react"
import { AuthContext } from "../../contexts/AuthContext"

export default function SignUp() {
    const [shouldShowPassword, setShouldShowPassword] = useState({pass:false, confirmPass:false})
    const showHidePassHandler = (toggleField) => {
        toggleField !== 0 ? setShouldShowPassword({...shouldShowPassword, confirmPass:!shouldShowPassword.confirmPass}):setShouldShowPassword({...shouldShowPassword, pass:!shouldShowPassword.pass})
    }

    const [passwordInputs,setPasswordInputs] = useState({
        pass:"",
        confirmPass:""
    })

  const {isLoggedIn,signUpFormSubmitHandler} = useContext(AuthContext)


    const navigate=useNavigate();
    useEffect(()=>{
        isLoggedIn && navigate("/")
    })

  return ( <>
    <NavigationBar/>
    <div className="signUpMain">
        <div className="signUpDiv">
           <div className='signUpHeaderDiv'>
            <p  className="signUpHeading">signUp</p >
           </div>
           <form onSubmit={(e)=>signUpFormSubmitHandler(e)} className="signUpDetailsDiv">
           <div className='signUpInputsDiv'>
                <input required  className="firstName" name="firstName" type="text" placeholder="First Name"/>
                <input required className="lastName" name="lastName"  type="text" placeholder="Last Name"/>
                <input required className="email" name="email" type="email" placeholder="Email"/>
                <input required className="passwordInputDiv" name="password" type={shouldShowPassword.pass ? "text":"password"} onKeyUp={(e)=>setPasswordInputs({...passwordInputs, pass:e.target.value})} placeholder='Password'/>

                {!shouldShowPassword.pass ? (<svg onClick={()=>showHidePassHandler(0)} className="eyeIconInvisible0" stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 1024 1024" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M942.2 486.2Q889.47 375.11 816.7 305l-50.88 50.88C807.31 395.53 843.45 447.4 874.7 512 791.5 684.2 673.4 766 512 766q-72.67 0-133.87-22.38L323 798.75Q408 838 512 838q288.3 0 430.2-300.3a60.29 60.29 0 0 0 0-51.5zm-63.57-320.64L836 122.88a8 8 0 0 0-11.32 0L715.31 232.2Q624.86 186 512 186q-288.3 0-430.2 300.3a60.3 60.3 0 0 0 0 51.5q56.69 119.4 136.5 191.41L112.48 835a8 8 0 0 0 0 11.31L155.17 889a8 8 0 0 0 11.31 0l712.15-712.12a8 8 0 0 0 0-11.32zM149.3 512C232.6 339.8 350.7 258 512 258c54.54 0 104.13 9.36 149.12 28.39l-70.3 70.3a176 176 0 0 0-238.13 238.13l-83.42 83.42C223.1 637.49 183.3 582.28 149.3 512zm246.7 0a112.11 112.11 0 0 1 146.2-106.69L401.31 546.2A112 112 0 0 1 396 512z"></path><path d="M508 624c-3.46 0-6.87-.16-10.25-.47l-52.82 52.82a176.09 176.09 0 0 0 227.42-227.42l-52.82 52.82c.31 3.38.47 6.79.47 10.25a111.94 111.94 0 0 1-112 112z"></path></svg>):
                (<svg onClick={()=>showHidePassHandler(0)} className="eyeIconVisible0" stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 1024 1024"  width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M942.2 486.2C847.4 286.5 704.1 186 512 186c-192.2 0-335.4 100.5-430.2 300.3a60.3 60.3 0 0 0 0 51.5C176.6 737.5 319.9 838 512 838c192.2 0 335.4-100.5 430.2-300.3 7.7-16.2 7.7-35 0-51.5zM512 766c-161.3 0-279.4-81.8-362.7-254C232.6 339.8 350.7 258 512 258c161.3 0 279.4 81.8 362.7 254C791.5 684.2 673.4 766 512 766zm-4-430c-97.2 0-176 78.8-176 176s78.8 176 176 176 176-78.8 176-176-78.8-176-176-176zm0 288c-61.9 0-112-50.1-112-112s50.1-112 112-112 112 50.1 112 112-50.1 112-112 112z"></path></svg>)}


                <input required className="confirmPasswordInputDiv" type={shouldShowPassword.confirmPass ? "text":"password"} onKeyUp={(e)=>setPasswordInputs({...passwordInputs, confirmPass:e.target.value})}  placeholder='Confirm Password'/>
                {!shouldShowPassword.confirmPass? (<svg onClick={()=>showHidePassHandler(1)}className="eyeIconInvisible1" stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 1024 1024" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M942.2 486.2Q889.47 375.11 816.7 305l-50.88 50.88C807.31 395.53 843.45 447.4 874.7 512 791.5 684.2 673.4 766 512 766q-72.67 0-133.87-22.38L323 798.75Q408 838 512 838q288.3 0 430.2-300.3a60.29 60.29 0 0 0 0-51.5zm-63.57-320.64L836 122.88a8 8 0 0 0-11.32 0L715.31 232.2Q624.86 186 512 186q-288.3 0-430.2 300.3a60.3 60.3 0 0 0 0 51.5q56.69 119.4 136.5 191.41L112.48 835a8 8 0 0 0 0 11.31L155.17 889a8 8 0 0 0 11.31 0l712.15-712.12a8 8 0 0 0 0-11.32zM149.3 512C232.6 339.8 350.7 258 512 258c54.54 0 104.13 9.36 149.12 28.39l-70.3 70.3a176 176 0 0 0-238.13 238.13l-83.42 83.42C223.1 637.49 183.3 582.28 149.3 512zm246.7 0a112.11 112.11 0 0 1 146.2-106.69L401.31 546.2A112 112 0 0 1 396 512z"></path><path d="M508 624c-3.46 0-6.87-.16-10.25-.47l-52.82 52.82a176.09 176.09 0 0 0 227.42-227.42l-52.82 52.82c.31 3.38.47 6.79.47 10.25a111.94 111.94 0 0 1-112 112z"></path></svg>):
                (<svg onClick={()=>showHidePassHandler(1)}className="eyeIconVisible1" stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 1024 1024"  width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M942.2 486.2C847.4 286.5 704.1 186 512 186c-192.2 0-335.4 100.5-430.2 300.3a60.3 60.3 0 0 0 0 51.5C176.6 737.5 319.9 838 512 838c192.2 0 335.4-100.5 430.2-300.3 7.7-16.2 7.7-35 0-51.5zM512 766c-161.3 0-279.4-81.8-362.7-254C232.6 339.8 350.7 258 512 258c161.3 0 279.4 81.8 362.7 254C791.5 684.2 673.4 766 512 766zm-4-430c-97.2 0-176 78.8-176 176s78.8 176 176 176 176-78.8 176-176-78.8-176-176-176zm0 288c-61.9 0-112-50.1-112-112s50.1-112 112-112 112 50.1 112 112-50.1 112-112 112z"></path></svg>)}
                <p className="confirPassErrorMsg" style={{visibility:passwordInputs.pass === passwordInputs.confirmPass? "hidden":"visible"}} >
                 Password & Confirm Password don't match!    
                </p>
            </div>
            <div className='signUpActionBtns'>
                <button type="submit" className='signUpActionBtn' disabled={passwordInputs.pass !== passwordInputs.confirmPass}>signUp</button>
            </div>
            <div className='newUserLogin'>
                Already have account? <NavLink className="newUserLoginLink" to="/login">Login</NavLink>
            </div>
           </form>
        </div>
    </div>
    </>)
}
