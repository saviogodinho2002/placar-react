import  { createContext, ReactNode, useState } from "react";

interface Iplacar {
        
    thisname: string,
    thispoints: number

}

type PlacaresContextType= {
    
    listPlacares:Iplacar[];
    setPlacares: (newState:Iplacar[])=> void;
}
const initValue ={
    listPlacares: [...[{thisname:"undefined",thispoints:0}]],
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

