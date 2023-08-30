import { auth } from "../../../firebase_setup/firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import { GoogleAuthProvider, signInWithRedirect } from "firebase/auth";



 const SignInButton = () => {
    const [user] = useAuthState(auth);
    const signIn = () => {
        const provider = new GoogleAuthProvider();
        signInWithRedirect(auth, provider);
    };
    const signOut = () => {
        auth.signOut();
    };

    return (<>
    {user ?
    (<button onClick={signOut} className="sign-out" type="button">Sign Out</button>) :
    (<button onClick={signIn} className="sign-in" type="button">Sign In </button>)
    }

    </>)
}

export default SignInButton;