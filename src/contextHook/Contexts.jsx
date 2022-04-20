import { createContext, useEffect, useState } from "react";
import useFetch from "../customHook/useFetch";

export const RandomUserContext = createContext();



export const Context = (props) => {


 const handleMouse = () => {
    console.log('denemecontext');
 };



    return(
        <RandomUserContext.Provider value={{handleMouse}}>
            {props.children}
        </RandomUserContext.Provider>
    )

}