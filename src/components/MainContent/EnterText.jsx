import { useRef } from 'react';

// import Button from '../UI/Button'; // ??
// import Input from '../UI/Input'; // ??
import classes from './EnterText.module.css';

const EnterText = () => {
  const messageInputRef = useRef();

  const submitMessageHandler = (event) => {
    event.preventDefault();

    console.log('Message Sent');
  };

  return (
    <form className={classes.container} onSubmit={submitMessageHandler}>
      <input
        className={classes.input}
        id='message'
        placeholder='Enter message here...'
        ref={messageInputRef}
      ></input>
      <button className={classes.btn}>Send</button>
    </form>
  );
};

export default EnterText;
