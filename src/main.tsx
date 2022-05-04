import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import { PlacaresStatesProvider } from './context/EstadosPlacar'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <PlacaresStatesProvider>
  <React.StrictMode>
    <App />
  </React.StrictMode>
  </PlacaresStatesProvider>
)
