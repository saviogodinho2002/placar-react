import { useState } from 'react'

import './App.css'
import { Placar } from './components/Placar';

interface Iplacar{
  thisindex:number
  thisname:string,
  thispoints:number
}


function App() {

  const [listPlacares,setPlacar] = useState<Iplacar[]>([]);

  
  function addPlacar(){
    

    setPlacar([...listPlacares,{
      thisindex: listPlacares.length as number,
      thisname:("undefined"+listPlacares.length ) as string,
      thispoints: 0 as number}])
    
  }
  
  return (
    <div className="aplication container">
      {
        listPlacares.map(placar=>{
         
          
          return (
          <>
          
          <Placar key={placar.thisindex} placar={placar} listPlacares={listPlacares} />
          </>
          )
        })

      }
      <br/>
      <button id="create-placar-button" onClick={addPlacar}> Novo placar </button>

    </div>
  )
}

export default App;
