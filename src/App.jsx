import MainContent from './components/MainContent/MainContent';
import Sidebar from './components/Sidebar/Sidebar';
import classes from './App.module.css';

function App() {
  return (
    <div className={classes["grid"]}>
      <div className={classes["sidebar"]}> <Sidebar className={classes.sidebar} /> </div>
     <div className={classes["main-content"]}> <MainContent className={classes["main-content"]} /> </div>
    </div>
  );
}

export default App;
