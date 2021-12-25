import react,{useState} from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useRouteMatch,
  useParams
} from "react-router-dom";
import DownPage from './components/firstPart'
import TypeOfGamePage from './components/typeOfGame'
import SportPages from './components/sportPage'
import SciencesPage from './components/sciencesPage'
import HistoryPage from './components/HistoryPage'
import EditPage from './components/editPage';
// import {QuestionsData} from './components/QeustionsDataSciences';
import { QeustionsContext } from './context';
import "./styles/App.scss";
function App() {
  const [display, setDisplay] = useState("DownPage")
  // const [qeustionsData, setQeustionsData] = useState(QuestionsData);
  setTimeout(() => {
    setDisplay("SecondPage")
  }, 6500);
return (
  // <QeustionsContext.Provider value={[qeustionsData, setQeustionsData]}>
     <Router>
    <Route path="/" exact>
      <div className="containerFirstpage">
          {display === "DownPage" &&(
            <DownPage/>
          )}
          {display === "SecondPage" &&(
            <TypeOfGamePage/>
          )}
          </div>
      </Route>
       <Route path="/sport" exact>
        <SportPages/>
      </Route>
      <Route path="/sciences" exact>
        <SciencesPage/>
      </Route>
      <Route path="/history" exact>
        <HistoryPage/>
      </Route>
      {/* i make this for work in edit page that the user can edit the qeustion but I don't complete it, and you need to use context */}
      {/* <Route path="/editPage" exact>
        <EditPage/>
      </Route> */}
    </Router>
// </QeustionsContext.Provider>
  );
}

export default App;