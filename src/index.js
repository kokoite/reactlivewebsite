import React from 'react'
import ReactDom from 'react-dom'
import {BrowserRouter} from 'react-router-dom'
import App from './App.jsx'
import './index.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
// import "../node_modules/bootstrap/dist/js/bootstrap.bundle"
ReactDom.render(<>
<BrowserRouter>
  <App/>
</BrowserRouter>
</>,document.getElementById('root'))