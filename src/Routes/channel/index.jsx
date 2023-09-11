import Messages from "../../components/MainContent/Messages/Messages"
import EnterText from "../../components/MainContent/EnterText"

export default function Channel() {
    return (<>
        <main id="mainGrid">
            <Messages />
        </main>
        <div id="textInputGrid">
            <EnterText />
        </div>
    </>)
}