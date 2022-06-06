import { useContext } from 'react'
import fileDownload from 'js-file-download';
import { uniqueId } from 'lodash'
import './App.css'
import { Placar } from './components/Placar';

import { StatesContext } from "./context/EstadosPlacar"

interface Iplacar {
  thisname: string,
  thispoints: number
}
function App() {

  const { listPlacares, setPlacares } = useContext(StatesContext);

  console.log(listPlacares);

  
  function addPlacar() {

    setPlacares([...listPlacares, {
      id: uniqueId(),
      thisname: ("undefined" + listPlacares.length) as string,
      thispoints: 0 as number,
    }])

    

  }
  function gerateJson() {
    fileDownload(JSON.stringify(listPlacares), "myPlacar.json");
  }

  return (
    <div className="aplication container">

      {

        listPlacares.map((placar) => {
          return (
            <Placar key={listPlacares.indexOf(placar)} placar={placar} />

          )
        })
      }
      <div>
        <button id="create-placar-button" className='placar-button' onClick={addPlacar}> + </button>
        <button id="download-json-button" className='placar-button' onClick={gerateJson}> v </button>
      </div>
      <div>
        <label htmlFor="input-json" id="label-input"> upload </label>
        <input id='input-json' type="file" value={""} accept='.json' onChange={
          (e?) => {

            if (e.target.files == null) return;

            let file = e.target.files[0];

            const reader = new FileReader();

            reader.onload = function (event) {

              setPlacares(JSON.parse(event.target?.result as string))

            }
            reader.readAsText(file);
          }}
        />
      </div>
    </div>

  )
}
export function usePlacares() {
  const context = useContext(StatesContext);
  const { listPlacares, setPlacares } = context;
  return { listPlacares, setPlacares };
}

export default App;
