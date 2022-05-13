import  { createContext, ReactNode, useState } from "react";

export interface Iplacar {
    id?: string;
    thisname: string,
    thispoints: number

}

export type PlacaresContextType= {
    
    listPlacares:Iplacar[];
    setPlacares: (newState:any)=> void;
}
const initValue ={
    listPlacares: [{id:'0',thisname:"undefined",thispoints:0 }],
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

