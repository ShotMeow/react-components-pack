import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import Overlay from './Overlay/Overlay'

ReactDOM.render(
  <React.StrictMode>
    <Overlay>
      <App />
    </Overlay>
  </React.StrictMode>,
  document.getElementById('root')
)