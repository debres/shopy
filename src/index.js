import React from 'react';
import ReactDOM from 'react-dom';
import ShopyProvider from './Services/ContextService'
import { BrowserRouter } from 'react-router-dom';
import Layouts from './Components/Layouts';
import './index.css';

const app = (
    <ShopyProvider>
      <BrowserRouter>
        <Layouts />
      </BrowserRouter>
    </ShopyProvider>
)
ReactDOM.render(app, document.getElementById('root'));
