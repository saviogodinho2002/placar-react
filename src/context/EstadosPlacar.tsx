import  { createContext, ReactNode, useState } from "react";

interface Iplacar {
        
    thisindex: number
    thisname: string,
    thispoints: number

}

type PlacaresContextType= {
    
    listPlacares:Iplacar[];
    setPlacares: (newState:Iplacar[])=> void;
}
const initValue ={
    listPlacares: [...[{thisindex: 0,thisname:"undefined",thispoints:0}]],
    setPlacares:()=>{
        
    },
}

export const StatesContext = createContext<PlacaresContextType>(initValue);

type ChildrenProps = {
    children: ReactNode;
}

export  const PlacaresStatesProvider=({children}:ChildrenProps)=> {
    const [listPlacares, setPlacares] = useState(initValue.listPlacares);

   

    return (

        <StatesContext.Provider value={{ listPlacares, setPlacares }} >
            {children}

        </StatesContext.Provider>
    );
}

