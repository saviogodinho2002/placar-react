import { useState,useContext } from "react";
import App from "../App";
import { Iplacar, StatesContext } from "../context/EstadosPlacar";



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
            thispoints: placar.thispoints > 0? placar.thispoints -1: placar.thispoints
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
    function insertPoints(){
        let temp = window.prompt("Novo valor: ");
        let index = listPlacares.indexOf(placar);

        let newPlacar = {
            ...placar,
            thispoints: (temp == null || temp == ""||isNaN(parseInt(temp)))?
             placar.thispoints: 
                parseInt(temp)
        }
        listPlacares[index] = newPlacar;
        setPlacares([...listPlacares]);
        

    }
    return (
        <div className="placar-container" >
            <button className="delet-placar-button"  onClick={deletPlacar}>X</button>
            <button className="color-button" onClick={changeColorBackground}><i></i> cor</button>
            <div className="placar-container-container">
                <p className="placar-name" onDoubleClick={changeName}> {placar.thisname} </p>
                
                <div className="placar-points-container" onDoubleClick={insertPoints}>
                   
                    <p className="placar-points placar-points-left">
                            {Math.floor(Math.abs(placar.thispoints)/10)} 
                    </p>
                    <p className="placar-points placar-point-right">  {Math.abs(placar.thispoints%10)} </p>
                </div>
            </div>
                <div className="buttons-addsub">
                    <button className="placar-button placar-button-sub d-block" onClick={subPoints}> - </button>
                    <button className="placar-button placar-button-add d-block" onClick={addPoints}>+</button>
                </div> 

                </div>
    );

}