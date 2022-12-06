import './App.css';
import Home from './components/Home';
import Login from './components/Login'
import Jobs from './components/Jobs';

// import { useState, useEffect } from "react";
import { BrowserRouter, Switch, Route, Link } from "react-router-dom";

function App() {

//   const [count, setCount] = useState(0);


  // useEffect(() => {
  //   fetch("/hello")
  //     .then((r) => r.json())
  //     .then((data) => setCount(data.count));
  // }, []);

  return (
    <BrowserRouter>
      <div className="App">
      <Link to={"/jobs"}>
        <button>Jobs</button>
      </Link>
        <Switch>
          <Route path="/volunteers" >
            <Login/>
          </Route>
          <Route path="/jobs">
            < Jobs />
          </Route>
          <Route path="/">
            <Home/>
          </Route>
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;