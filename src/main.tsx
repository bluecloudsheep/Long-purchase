import React from 'react';
import ReactDOM from 'react-dom/client'
import { HashRouter } from "react-router-dom";

import App from './App.tsx'
import 'normalize.css'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <HashRouter>
    <App />
    </HashRouter>
)
