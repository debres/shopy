import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import Layouts from './Layouts';
import './reset.css';
import './index.css';
//import './gridTest.css';
//import LogIn from './Components/UI/LogIn.js';
/*const store = createStore(reducer);

const app = (
  <Provider store={store}>
    <Layouts />
  </Provider>
)*/


const app = (
    <BrowserRouter>
      <Layouts/>
    </BrowserRouter>
)
ReactDOM.render(app, document.getElementById('root'));
