import React, { useEffect, useState } from "react"
import Navigation from "./components/Navigation"
import QuestionBox from "./components/QuestionBox"
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Results from "./components/Results"

// . Na prvom koraku se mogu dodavati i 
// uređivati pitanja (tipa jednostruki/višestruki odabir
// Na drugom koraku prikazuju se rezultati ispunjenih anketa 
// (baza nije potrebna dovoljno je imati mockup podataka).
// ⦁	Forma inicijalno sadrži jedno pitanje tipa 
// jednostruki/višestruki odgovor 



function App() {
  const [title, setTitle] = useState("Nova anketa")
  const [path, setPath] = useState("")
  const [questionNumber, setQuestionNumber]= useState(1)
  const [edit, setEdit] = useState({
    edited:false,
    multy:false,
    required:false,
    save:false,
    option:false
  })
  const [addAnswer, setAddAnswer] = useState([])
  const [answer, setAnswer] = useState("Odgovor")
  // console.log("addAnswer>>>",addAnswer);
  // console.log("answer>>>",answer);
  
  
  return (
    <Router>
      <div className="app">
          <h1 className="app__ankete">Ankete</h1>
          <ul className="app__breadcrums">
              <li>Ankete</li>
            <Link to="/edit">
              <li className="app__title">{title}</li>
            </Link>
          </ul>
          <Navigation 
            path={path} 
            setPath={setPath}
            edit={edit} 
          />
        <Switch>
          <Route path="/edit">
            <QuestionBox
              answer={answer}
              setAnswer={setAnswer}
              setAddAnswer={setAddAnswer}
              addAnswer={addAnswer}
              title={title} 
              setTitle={setTitle}
              questionNumber={questionNumber}
              setQuestionNumber={setQuestionNumber}
              edit={edit}
              setEdit={setEdit}
            />
          </Route>
          <Route path="/view">
          </Route>
          <Route path="/results">
            <Results/>
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
