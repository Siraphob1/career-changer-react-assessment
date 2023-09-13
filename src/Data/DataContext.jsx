import { createContext, useState } from "react"


const DataContext = createContext();

export const DataProvider = ({children}) =>{
    const [members , setMembers] = useState({});

    return(
        <DataContext.Provider value={{members , setMembers}}>
            {children}
        </DataContext.Provider>
    )
}

export default DataContext;


