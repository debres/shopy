import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';

import configStore from './ConfigStore/ConfigStore';
import ErrorBoundry from './Components/ErrorBoundry';
import { ShopyServiceProvider } from './Components/ShopyServicContext';
import ShopyService from './Services/ShopyService';
import Layouts from './Layouts';
import './reset.css';
import './index.css';

const store = configStore();
const shopyService = new ShopyService();

const app = (
  <Provider store={store}>
    <ErrorBoundry>
      <ShopyServiceProvider value={shopyService}>
        <BrowserRouter>
          <Layouts />
        </BrowserRouter>
      </ShopyServiceProvider>
    </ErrorBoundry>
  </Provider>
)
ReactDOM.render(app, document.getElementById('root'));
