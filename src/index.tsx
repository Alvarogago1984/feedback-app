import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './entrypoint/App'
import GlobalStyled from './global.style'

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)
root.render(
  <React.StrictMode>
    <GlobalStyled />
    <App />
  </React.StrictMode>
)
 