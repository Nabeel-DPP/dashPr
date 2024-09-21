import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { App } from './App'

import "./assets/js/custom.js";
import "./assets/js/mono.js";
import hotkeys from 'hotkeys-js';
import '@mdi/font/css/materialdesignicons.min.css';
// import 'datatables.net-dt/css/jquery.dataTables.min.css';
import 'datatables.net';


// import NProgress from 'nprogress';
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>
)
