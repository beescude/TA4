import 'bootstrap/dist/js/bootstrap.js';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Navigation from './components/Navigation'
import Show from './components/ShowEjercicio'
import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
function App() {
  return (
    <Router>
      <Navigation />
      <Route path="/ejercicioA" exact component={Show} />
      <Route path="/ejercicioB" exact component={Show} />
      <Route path="/ejercicioC" exact component={Show} />
    </Router>
  );
}

export const backend = {
  host: "http://localhost",
  port: 8080
 }

export default App;
