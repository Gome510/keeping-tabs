// import { useState } from 'react';

import ChannelHeader from './components/Layout/ChannelHeader';
import EnterText from './components/EnterText/EnterText';
import './App.css';

function App() {
  const currentChannel = "Channel Name 1";
  // const [currentChannel, setCurrentChannel] = useState("Channel Name 1");

  return (
    <>
      <ChannelHeader channelName={currentChannel}></ChannelHeader>
      <main></main>
      <EnterText></EnterText>
    </>
  );
}

export default App;
