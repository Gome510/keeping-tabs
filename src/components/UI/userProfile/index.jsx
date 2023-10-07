import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../../../firebase_setup/firebase";
import SignInButton from "./signinbutton";
import Profile from "../profile";
import "./index.css"

//accepts a props.user parameter
export default function userProfile() {
    const [user] = useAuthState(auth);

    return (
        <div className="userProfile">
            <Profile user = {user}/>
            <SignInButton/>
        </div>
    )
}