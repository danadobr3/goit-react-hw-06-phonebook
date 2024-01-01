// import React from 'react';
// import ReactDOM from 'react-dom/client';
// import { App } from 'components/App';
// import './index.css';

// ReactDOM.createRoot(document.getElementById('root')).render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>
// );

 import ReactDOM from "react-dom/client";
 import { Provider } from "react-redux";
 import { App } from "components/App";
 import { persistor, store } from "./redux/store";
 import { PersistGate } from "redux-persist/integration/react";
 import './index.css';

 ReactDOM.createRoot(document.getElementById("root")).render(  
   <Provider store={store}>  
     <PersistGate loading={null} persistor={persistor}>
     <App /> </PersistGate> 
 </Provider>
 );