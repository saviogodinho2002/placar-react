import { useContext } from 'react'
import fileDownload from 'js-file-download';

import './App.css'
import { Placar } from './components/Placar';

import { StatesContext } from "./context/EstadosPlacar"




interface Iplacar {
  thisindex: number
  thisname: string,
  thispoints: number
}



function App() {



  const { listPlacares, setPlacares } = useContext(StatesContext);



  function addPlacar() {

    setPlacares([...listPlacares, {
      thisindex: listPlacares.length as number,
      thisname: ("undefined" + listPlacares.length) as string,
      thispoints: 0 as number
    }])


  }
  function gerateJson() {
    fileDownload(JSON.stringify(listPlacares), "myPlacar.json");
  }

  function loadJson() {
    const input = document.getElementById("input-json");
    const reader = new FileReader



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
      <button id="download-json-button" className='placar-button' onClick={gerateJson}> v </button>

      <input id='input-json' type="file" accept='.json' onChange={(e)=>{ 
        
        const file = e.target.files[0];

        if(file == null) return;
        
        const reader = new FileReader();

        reader.onload = function(event){
         setPlacares( JSON.parse(event.target?.result))
        }
        reader.readAsText(file);
        //console.log(e.target.files[0])
        
        
        }} />

    </div>

  )
}
export function usePlacares() {
  const context = useContext(StatesContext);
  const { listPlacares, setPlacares } = context;
  return { listPlacares, setPlacares };
}

export default App;
