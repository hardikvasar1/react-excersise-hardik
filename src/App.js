import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  Switch,
} from 'react-router-dom';
import Demo1 from './demo1';
import Demo2 from './demo2';
import Demo3 from './demo3';
import Demo4 from './demo4';
import Demo5 from './demo5';
import Demo6 from './demo6';
import Demo7 from './demo7';
import Demo8 from './demo8';
import Demo9 from './demo9';
import Demo10 from './demo10';
import Demo10_1 from './demo10_1';
import Demo11 from './demo11';
import Demo12 from './demo12';
class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <ul className="App-header">
            <li>
              <Link to="/demo1">demo1</Link>
            </li>
            <li>
              <Link to="/demo2">demo2</Link>
            </li>
            <li>
              <Link to="/demo3">demo3</Link>
            </li>
            <li>
              <Link to="/demo4">demo4</Link>
            </li>
            <li>
              <Link to="/demo5">demo5</Link>
            </li>
            <li>
              <Link to="/demo6">demo6</Link>
            </li>
            <li>
              <Link to="/demo7">demo7</Link>
            </li>
            <li>
              <Link to="/demo8">demo8</Link>
            </li>
            <li>
              <Link to="/demo9">demo9</Link>
            </li>
            <li>
              <Link to="/demo10">demo10</Link>
            </li>
            <li>
              <Link to="/demo10_1">demo10_1</Link>
            </li>
            <li>
              <Link to="/demo11">demo11</Link>
            </li>
            <li>
              <Link to="/demo12">demo12</Link>
            </li>
          </ul>

          <Routes>
            <Route exact path="/demo7" element={<Demo7 />}></Route>
            <Route exact path="/demo8" element={<Demo8 />}></Route>
            <Route exact path="/demo9" element={<Demo9 />}></Route>
            <Route exact path="/demo10" element={<Demo10 />}></Route>
            <Route
              exact
              path="/demo10_1"
              element={<Demo10_1 title="Paul Mccartney" />}
            ></Route>
            <Route exact path="/demo11" element={<Demo11 />}></Route>
            <Route
              exact
              path="/demo12"
              element={
                <Demo12
                  text="OMG! Something really bad has happended!"
                  show={true}
                />
              }
            ></Route>
          </Routes>
        </div>
      </Router>
    );
  }
}

export default App;
