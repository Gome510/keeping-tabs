import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../../../firebase_setup/firebase";
import signedoutpfp from "../../../assets/signedoutpfp.png"

export default function Profile() {
    const [user] = useAuthState(auth);

    if (!user ) { //not signed in
        return (<>
            <img src={signedoutpfp} />
        </>)
    }

    const img = user.providerData[0].photoURL

    if (!img) { //no profile picture
        return (<>
            <img src={signedoutpfp} />
        </>)
    }

    return (
    <img src={img} />
    )
}