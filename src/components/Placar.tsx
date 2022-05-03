import { useState } from "react";
import App from "../App";

interface Iplacar {
    thisindex: number
    thisname: string,
    thispoints: number
}

type PlacarProps = {
    placar: Iplacar,
    listPlacares: Iplacar[],
    updateState: React.Dispatch<React.SetStateAction<Iplacar[]>>
}


export function Placar(props: PlacarProps) {


    const [state, setState] = useState<Iplacar>(props.placar);


    function addPoints() {
        setState(
            {
                ...state,
                thispoints: state.thispoints + 1
            })
        props.listPlacares[state.thisindex] = state;

        props.updateState([...props.listPlacares]);
    }
    function subPoints() {
        setState(
            {
                thisindex: state.thisindex,
                thisname: state.thisname,
                thispoints: state.thispoints - 1
            })

        props.listPlacares[state.thisindex] = state;

        props.updateState([...props.listPlacares]);
    }
    function changeName() {
        let temp = window.prompt("Novo nome: ") as string;

        setState(
            {
                thisindex: state.thisindex,
                thisname: (temp == "" || temp == null) ? state.thisname : temp,
                thispoints: state.thispoints
            })
        props.listPlacares[state.thisindex] = state;

        props.updateState([...props.listPlacares]);

    }
    return (
        <div className="placar-container">
            <p className="placar-name" onClick={changeName}> {state.thisname} </p>

            <div className="placar-points-container">
                <p className="placar-points">  {state.thispoints} </p>
            </div>

            <button className="placar-button sub" onClick={subPoints}> -1 </button>
            <button className="placar-button add" onClick={addPoints}>+1</button>
        </div>
    );

}