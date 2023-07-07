import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import CurranciesSelector from "../../Components/Common/CurranciesSelectore"
import LoginPage from "../../Components/SearchWidget/LoginContainer"
import { useState } from "react"
import userIcon from "../../Assets/user-icon.png"

function Header() {
    const [loginPageValid, setLoginPageValid] = useState(false)
    const [userLogedIn, setUserLogedIN] = useState(false)
    const [registerUpPageValid, setRegisterPageIsValid] = useState(false)

    const activity = (e) => {
        setLoginPageValid(false)
        setUserLogedIN(true)
    }
    return (
        <>
            <div className="menu">
                <div className="menu-container">
                    <div className="menu-row">
                        <div className="currancy-wrapper">
                            <CurranciesSelector />
                        </div>
                        <div className="logo-wrapper">
                            <img src="https://test.igoroom.com/igoroom/v2/img/ui/logo.svg" alt="Logo" />
                            <div className="login-container">
                                <div className="login-icon" onClick={(e) => activity(e)}>
                                    {!userLogedIn ? (<img src={userIcon} alt="User"/>) : ('')}
                                    {userLogedIn && userLogedIn ? (<button>
                                        <img src="user.png"></img>
                                        <small>Sojal Dhanure</small>
                                    </button>) : ('')}
                                </div>

                                {loginPageValid && loginPageValid ? (<div className="login-page">
                                    <LoginPage />
                                </div>) : ('')}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>)
}
export default Header