import React from 'react';
import ReactDOM from 'react-dom/client';
import './style/style.scss';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Layout from "./layout/layout";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
      <Layout>
          <App />
      </Layout>
  </React.StrictMode>
);

reportWebVitals();
