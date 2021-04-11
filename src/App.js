import CategoriesComponents from "./categoriesComponents";
import './App.css';
import { BrowserRouter as Router, Switch, Route, Link, useParams } from "react-router-dom";
// import ReactDOM from 'react-dom';
import WeatherApp from "./weatherApp";

function App() {
  return (<div className="App">
  <div>
  <WeatherApp /></div>
    <Router>
      <Switch>
        <Router path="/CategoriesComponents">
          <CategoriesComponents />
        </Router>
      </Switch>
    </Router>
  </div>

  )
}
export default App;