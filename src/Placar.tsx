import { useState } from "react";

type PlacarProps = {
    thisname:string,
    thispoints:number
}


export function Placar(props:PlacarProps){
    const [points,setPoints] = useState<number>(props.thispoints);
    const [name,setName] = useState<string>(props.thisname)
    function addPoints(){
       setPoints(points+1);
    }
    function subPoints(){
        setPoints(points-1);
    }
    function changeName(){
        let temp = window.prompt("Novo nome: ") as string;
        setName(  (temp.trim() == "") ? name:temp.trim());
    }
    return (
        <div className="placar-container">
           <p className="placar-name" onClick={changeName}> {name} </p>

            <div className="placar-points-container">
                <p className="placar-points">  {points} </p>
            </div>
        <button className="placar-addbutton" onClick={addPoints}>add</button>
        <button className="placar-addbutton" onClick={subPoints}>sub</button>
        </div>
    );

}