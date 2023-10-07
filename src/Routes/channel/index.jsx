import EnterText from "../../components/messages/enterText"
import Messages from "../../components/messages"

import classes from "./index.module.css"
import ChannelHeader from "../../components/header"

export default function Channel() {
    return (<div className={classes["messages-container"]}>
            <ChannelHeader />
            <Messages />
            <EnterText />
    </div>)
}