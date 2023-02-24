import React from 'react'
import ReactDOM from 'react-dom/client'

import { store } from "./redux/store";
import { Provider } from "react-redux";
// Import Swiper styles

import "./assets/boxicons-2.0.9/css/boxicons.min.css";
import "./sass/index.scss";

import Layout from "./components/Layout";
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
     <Provider store={store}>
      <Layout />
    </Provider>
  </React.StrictMode>,
)
