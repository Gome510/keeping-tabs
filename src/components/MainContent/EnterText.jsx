import { addDoc, collection, serverTimestamp } from "firebase/firestore";
import { firestore, auth } from "../../firebase_setup/firebase";

import { useState } from 'react';

// import Button from '../UI/Button'; // ??
// import Input from '../UI/Input'; // ??
import classes from './EnterText.module.css';
import arrow from "../../assets/sendArrow.png"


const EnterText = () => {
  const [input, setInput] = useState("")

  const submitMessageHandler = async (event) => {
    event.preventDefault();
    
    if (!auth.currentUser) {
      console.log("please sign in to send messages.")
      return;
    }
    
    const { uid, displayName, photoURL } = auth.currentUser;
    const newMessage = await addDoc(collection(firestore, "channel1"), { //this "channel1" should be replace with the variable for the current channel
      text: input,
      user_id: uid,
      user_name: displayName,
      pfp: photoURL,
      time: serverTimestamp(),
    });

    console.log(newMessage)

    setInput("");
  };

  return (
    <div className={classes.inputContainer }>
    <form className={classes.container} onSubmit={submitMessageHandler}>
      <input
        className={classes.input}
        id='message'
        value={input}
        placeholder='Enter message here...'
        onChange={(e) => setInput(e.target.value)}
      />
      <button type='submit' className={classes.btn}> </button>
    </form>
    </div>
  );
};

export default EnterText;
