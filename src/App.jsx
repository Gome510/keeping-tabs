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
    <>
      <Sidebar className={classes.sidebar} />
      <MainContent className={classes["main-content"]} />
      <form onSubmit={submithandler}>
        <input type="text" ref={dataRef}></input>
        <button type="submit">Save</button>
      </form>
    </>
  );
}

export default App;
