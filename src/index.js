import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import BankContextProvider from './Context/bank-context'


ReactDOM.render(
  <BankContextProvider>
  <React.StrictMode>

      <App />
    
  </React.StrictMode>
  </BankContextProvider>,
  document.getElementById('root')
);

</React.StrictMode>
,
  document.getElementById('root'),
);