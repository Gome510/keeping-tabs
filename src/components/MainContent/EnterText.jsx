import { useRef } from 'react';

// import Button from '../UI/Button'; // ??
// import Input from '../UI/Input'; // ??
import classes from './EnterText.module.css';
import arrow from "../../assets/sendArrow.png"

const EnterText = () => {
  const messageInputRef = useRef();

  const submitMessageHandler = (event) => {
    event.preventDefault();

    console.log('Message Sent');
  };

  return (
    <div className={classes.inputContainer }>
    <form className={classes.container} onSubmit={submitMessageHandler}>
      <input
        className={classes.input}
        id='message'
        placeholder='Enter message here...'
        ref={messageInputRef}
      ></input>
      <img src={arrow} width='45px' className={classes.btn}/>
    </form>
    </div>
  );
};

export default EnterText;
