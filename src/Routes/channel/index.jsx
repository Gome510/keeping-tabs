import EnterText from "../../components/messages/enterText"
import Messages from "../../components/messages"

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