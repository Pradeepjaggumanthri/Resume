import React from 'react';
import './App.css';
import Headersection from './layout/header';
import {BrowserRouter} from 'react-router-dom';
import Footersection from './layout/footer';
import Layoutsection from './layout/layout';
import './assets/css/styles.css';
import './assets/css/res.css';

function App() {
  return (
    <BrowserRouter>
    <div className="App">
     <Headersection />
     <Layoutsection />
     <Footersection />
    </div>
    </BrowserRouter>
  );
}

export default App;

