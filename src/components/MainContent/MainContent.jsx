import ChannelHeader from "./ChannelHeader";
import EnterText from "./EnterText";
import Messages from "./Messages/Messages";
import "./MainContent.css"

const MainContent = () => {
  const currentChannel = "Channel Name 1";
  // const [currentChannel, setCurrentChannel] = useState("Channel Name 1");

  return (
    <div id="mcGrid">
     <div id="channelHeaderGrid"> <ChannelHeader channelName={currentChannel}></ChannelHeader> </div>
      <main id="mainGrid">
        <Messages />
      </main>
      <div id="textInputGrid"><EnterText /></div>
    </div>
  );
};

export default MainContent;
