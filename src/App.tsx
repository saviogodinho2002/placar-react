import { useContext } from 'react'

import './App.css'
import { Placar } from './components/Placar';

import { StatesContext } from "./context/EstadosPlacar"


interface Iplacar {
  thisindex: number
  thisname: string,
  thispoints: number
}



function App() {



  const { listPlacares,setPlacares } = useContext(StatesContext);

  console.log(listPlacares);

  function addPlacar() {
    
    setPlacares([...listPlacares,{
      thisindex: listPlacares.length as number,
      thisname:("undefined"+listPlacares.length ) as string,
      thispoints: 0 as number}])


  }

  
  return (
   
    

      <div className="aplication container">
       
        {
          listPlacares.map((placar) => {


            return (
              

                <Placar key={placar.thisindex} placar={placar} />
              
            )
          })

        }

        <br />
        <button id="create-placar-button" className='placar-button' onClick={addPlacar}> + </button>

      </div>
      
  )
}
export function usePlacares() {
  const context = useContext(StatesContext);
  const { listPlacares, setPlacares } = context;
  return { listPlacares, setPlacares };
}

export default App;
