import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals'; 
import { Provider } from 'react-redux';
import  store  from './Redux/store.js';
import Formulaire from './Page/Formulaire.js';
import ValidateResult from './Page/ValidateResult.js';
import { BrowserRouter as Router, Route , Routes} from 'react-router-dom';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
      <Provider store={store}>
      <Router>
                <Routes>
                    <Route path="/" element={<Formulaire />}>
                    </Route>
                    <Route path="/ValidateResult" element={<ValidateResult />}>   
                    </Route>
                </Routes>
            </Router>
      </Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
