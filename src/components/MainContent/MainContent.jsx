import ChannelHeader from './ChannelHeader';
import EnterText from './EnterText';

const MainContent = () => {
  const currentChannel = "Channel Name 1";
  // const [currentChannel, setCurrentChannel] = useState("Channel Name 1");
  
  return (
    <>
      <ChannelHeader channelName={currentChannel}></ChannelHeader>
      <main></main>
      <EnterText />
    </>
  );
};

export default MainContent;
