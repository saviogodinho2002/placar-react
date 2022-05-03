import { useState } from "react";
import App from "../App";

interface Iplacar {
    thisindex: number
    thisname: string,
    thispoints: number
}

type PlacarProps = {
    placar: Iplacar;
    listPlacares: Iplacar[]
}


export function Placar(props: PlacarProps) {


    const [state, setState] = useState<Iplacar>(props.placar);
    const [listPlacares, setPlacar] = useState<Iplacar[]>(props.listPlacares);

    function addPoints() {
        setState(
            {
                thisindex: state.thisindex,
                thisname: state.thisname,
                thispoints: state.thispoints + 1
            })



    }
    function subPoints() {
        setState(
            {
                thisindex: state.thisindex,
                thisname: state.thisname,
                thispoints: state.thispoints - 1
            })

    }
    function changeName() {
        let temp = window.prompt("Novo nome: ") as string;

        setState(
            {
                thisindex: state.thisindex,
                thisname: temp == "" ? state.thisname : temp,
                thispoints: state.thispoints
            })

    }
    return (
        <div className="placar-container">
            <p className="placar-name" onClick={changeName}> {state.thisname} </p>

            <div className="placar-points-container">
                <p className="placar-points">  {state.thispoints} </p>
            </div>
            <button className="placar-addbutton" onClick={addPoints}>add</button>
            <button className="placar-addbutton" onClick={subPoints}>sub</button>
        </div>
    );

}