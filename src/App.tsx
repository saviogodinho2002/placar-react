import { useState } from 'react'

import './App.css'
import { Placar } from './Placar'

function App() {
  const [count, setCount] = useState(0)

  return (
   <div>
    <Placar thisname ={"alexandre"} thispoints = {0}/>
    <Placar thisname ={"savio"} thispoints = {0}/>
   </div>
  )
}

export default App
