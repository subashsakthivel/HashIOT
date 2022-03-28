import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { TransactionProvider} from './context/TransactionContext';
import { WEB3Provider } from './context/WEB3context';



ReactDOM.render(
      <TransactionProvider >
      <WEB3Provider>
        <React.StrictMode>
          <App />
        </React.StrictMode>
      </WEB3Provider>
      </TransactionProvider>
    ,

  document.getElementById('root')
);

reportWebVitals();
