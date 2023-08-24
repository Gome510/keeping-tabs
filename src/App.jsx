import MainContent from './components/MainContent/MainContent';
import Sidebar from './components/Sidebar/Sidebar';
import classes from './App.module.css';

function App() {
  return (
    <>
      <Sidebar className={classes.sidebar} />
      <MainContent className={classes["main-content"]} />
    </>
  );
}

export default App;
