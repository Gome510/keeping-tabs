import ChannelHeader from "./ChannelHeader";
import EnterText from "./EnterText";
import Messages from "./Messages/Messages";

const MainContent = () => {
  const currentChannel = "Channel Name 1";
  // const [currentChannel, setCurrentChannel] = useState("Channel Name 1");

  return (
    <>
      <ChannelHeader channelName={currentChannel}></ChannelHeader>
      <main>
        <Messages />
      </main>
      <EnterText />
    </>
  );
};

export default MainContent;
