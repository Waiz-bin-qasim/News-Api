import React from 'react';
import Navbar from './Navbar';
import About from './About/About'
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import Home from './Home';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route exact path='/' element={<Home />}>
        </Route>
        <Route exact path="/About" element={<About />}>
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
