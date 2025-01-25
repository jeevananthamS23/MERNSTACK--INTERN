import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Provider } from 'react-redux';
// import Display from './Display'
// import Data from "./Data1"; // Ensure the path is correct.
// import Parent from './parent';
// import Parent2 from './global_context_state';
// import Li1 from "./list1";
// import C11 from './data_send_F_B';
// import Form1 from './form';
// import States from './States';
// import Demo  from './eff';
import store from './apps/store';


const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
 // <React.StrictMode>
 <Provider store={store}>
     <App />
 </Provider>

   
  
 // </React.StrictMode>



/* <Data/>
    <States/>
     <Demo/>
     <Parent />
     <Parent2/>
     <Form1/>
     <Li1 />
     <C11/>
     <App/>
     <Display/>*/
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
