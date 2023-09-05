import MainContent from './components/MainContent/MainContent';
import handleSubmit from './handles/HandleSubmit';
import { useRef } from 'react';
import Sidebar from './components/Sidebar/Sidebar';
import classes from './App.module.css';

function App() {
  const dataRef = useRef();

  const submithandler = (e) => {
    e.preventDefault();
    handleSubmit(dataRef.current.value);
    dataRef.current.value = " ";
  }
  return (
    <div className={classes["grid"]}>
      <div className={classes["sidebar"]}> <Sidebar className={classes.sidebar} /> </div>
     <div className={classes["main-content"]}> <MainContent className={classes["main-content"]} /> </div>
    </div>
  );
}

export default App;
