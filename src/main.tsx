import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import { PlacaresStatesProvider } from './context/EstadosPlacar'
import './index.css'
import "./components/Placar.css"

ReactDOM.createRoot(document.getElementById('root')!).render(
  
  <React.StrictMode>
    <PlacaresStatesProvider>
    <App />
    </PlacaresStatesProvider>
    
  </React.StrictMode>
 
)