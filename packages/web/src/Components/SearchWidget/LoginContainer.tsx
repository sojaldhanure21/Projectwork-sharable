import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { useReducer } from "react"
import { faEnvelope } from "@fortawesome/free-regular-svg-icons"
import { faUnlock } from "@fortawesome/free-solid-svg-icons"

const userReducer = (state: any, action: any) => {
    if (action.type === "User_ID_Input") {
        console.log("action", action.value)
        return { value: action.value, isValid: action.value.includes("@") }
    }
    if (action.type === "User_Validation") {
        console.log("state", state.value)

        return { value: state.value, isValid: state.value.includes("@") }
    }

    return { value: '', isValid: false }
    console.log(state)
}
function LoginPage() {
    const [userID, dispatchUSer] = useReducer(userReducer, {
        value: '',
        isValid: null,
    });

    const userAuthentiaction = (e: any) => {
        console.log("userAuthentiaction", e)
    }
    const userAuthenticator = (e: any) => {
        console.log("User", e)
        const { value } = e.target
        dispatchUSer({ type: "User_ID_Input", value: value })
    }
    const passwordAuthenticator = (e: any) => {
        console.log("Password", e)
    }

    const validateEmailHandler = () => {
        dispatchUSer({ type: "User_Validation" })
    }

    const validatePasswordHandler = () => {

    }

    return (<>
        <div className="login-container-main">
            <form action="" onSubmit={(e) => userAuthentiaction(e)} >
                <label>Login to your account</label>
                <div className={userID.isValid == true ? "userId" : "userIdInvalid"}>  
                <FontAwesomeIcon icon={faEnvelope}/>
                    <input
                        type="text"
                        placeholder="Email Address"
                        onChange={(e) => userAuthenticator(e)}
                        className="loginpage"
                        onBlur={validateEmailHandler}
                    />
                </div>
                <div className="password">
                <FontAwesomeIcon icon={faUnlock} />
                    <input
                        type="password"
                        placeholder="Password"
                        onChange={(e) => passwordAuthenticator(e)}
                        onBlur={validatePasswordHandler} />
                </div>
                <a href="">Forgot Password</a>
                <button onClick={userAuthentiaction}>Sign IN</button>
            </form>
            <small>Or sign in with</small   >
            <div className="signin-links">
                <a href=""><img src="mail.png" alt="mail" /></a>
                <a href=""><img src="google.png" alt="google"/></a>
                <a href=""><img src="facebook.png" alt="facebook" /></a>
                <a href=""><img src="apple.png" alt="apple-store"/></a>
            </div>
        </div>
    </>);
}

export default LoginPage;