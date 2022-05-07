import { useState,useContext } from "react";
import App from "../App";
import { StatesContext } from "../context/EstadosPlacar";

interface Iplacar {
    thisname: string,
    thispoints: number
}

type PlacarProps = {
    placar: Iplacar,
    
}


export function Placar({ placar }: PlacarProps) {

    const { listPlacares,setPlacares } = useContext(StatesContext);

    function addPoints() {
        let index = listPlacares.indexOf(placar);
        placar = {
            ...placar,
            thispoints: placar.thispoints+1
        }
        listPlacares[index] = placar;

        setPlacares([...listPlacares]);

    }
    function subPoints() {
        let index = listPlacares.indexOf(placar);
        placar = {
            ...placar,
            thispoints: placar.thispoints -1
        }
        listPlacares[index] = placar;

        setPlacares([...listPlacares]);
    
    }

    function changeName() {
         let temp = window.prompt("Novo nome: ") as string;
        let index = listPlacares.indexOf(placar);

        placar = {
            ...placar,
            thisname: (temp == null || temp == "")? placar.thisname: temp
        }
        listPlacares[index] = placar;
        setPlacares([...listPlacares]);
        
    }
    function deletPlacar(){
        const index = listPlacares.indexOf(placar);    
        listPlacares.splice(index,1);
        setPlacares([...listPlacares]);
        
    }
    function changeColorBackground(){
        //TODO: boa sorte alexandre :)
    }
    return (
        <div className="placar-container" >
            <p className="placar-name" onClick={changeName}> {placar.thisname} </p>
            <button className="delet-placar-button"  onClick={deletPlacar}>X</button>
            <div className="placar-points-container">
                <p className="placar-points">  {placar.thispoints} </p>
            </div>

            <button className="color-button" onClick={changeColorBackground}> cor</button>
            <button className="placar-button sub" onClick={subPoints}> -1 </button>
            <button className="placar-button add" onClick={addPoints}>+1</button>
        </div>
    );

}