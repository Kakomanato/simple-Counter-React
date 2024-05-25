import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import Counter from './components/Counter.jsx'


let time = 0;

function renderPersonalizado() {
  ReactDOM.createRoot(document.getElementById('root')).render( <Counter time={time} />);
  time++;
}

setInterval(renderPersonalizado, 1000);