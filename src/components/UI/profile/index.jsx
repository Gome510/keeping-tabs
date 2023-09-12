import signedoutpfp from "../../../assets/signedoutpfp.png"


export default function Profile(props) {
    if (!props.user ) { //not signed in
        return (<>
            <img src={signedoutpfp} />
        </>)
    }
    
    const img = props.user.providerData[0].photoURL
    
    if (!img) { //no profile picture
        return (<>
            <img src={signedoutpfp} />
        </>)
    }
    
    return (
        <img src={img} />
    )
}