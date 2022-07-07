import React,{createContext,useContext,useReducer} from "react"

//using context api to make data global
export const DatalayerContext = createContext();

export const Datalayer =({initialstate, reducer,children})=>(
<DatalayerContext.Provider value={useReducer(reducer,initialstate)}>
    {/*Here children is App.js*/}
    {children}
</DatalayerContext.Provider>
)

export const useDatalayerValue=()=> useContext(DatalayerContext)
