import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  NavLink
} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from "./components/Home";
import Contact from "./components/Contact";
import About from "./components/About";
import User from "./components/User";

function App(



) {
  return (
    <Router>
      <div className="container">
        <div className="btn-groupc">
          <NavLink to="/" className="btn btn-dark mt-5" activeClassName="active">
            Inicio
          </NavLink>
          <NavLink to="/contacto" className="btn btn-dark mt-5" activeClassName="active">
            Contacto
          </NavLink>
          <NavLink to="/nosotros" className="btn btn-dark mt-5" activeClassName="active">
            Nosotros
          </NavLink>
        </div>
        <hr/>
        <Switch>
          <Route path="/nosotros/:id">
            <User />
          </Route>
          <Route path="/" exact>
            <Home />
          </Route>

          <Route path="/contacto">
            <Contact />
          </Route>
 
          <Route path="/nosotros">
            <About />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
