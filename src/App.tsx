import React from 'react';
import Homepage from './components/homepage';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Counter from './components/counter';



export default function App() {
  return (
    <Router>

        <Switch>
          <Route exact path="/">
            <Homepage />
          </Route>
          <Route path="/blackjack-counter">
            <Counter />
          </Route>
        </Switch>
    </Router>
  );
}

