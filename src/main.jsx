import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import  { createGlobalStyle } from 'styled-components'

const GlobleStyle = createGlobalStyle`

*{
  margin:0;
  padding:0;
  box-sizing:border-box;
  font-family: sans-serif;
}
body{
  background-color:#313233;
  min-height: 100vh;
  max-width: 1200px;
}

`;


createRoot(document.getElementById('root')).render(


  <StrictMode>
    <GlobleStyle/>
    <App />
  </StrictMode>,
)
