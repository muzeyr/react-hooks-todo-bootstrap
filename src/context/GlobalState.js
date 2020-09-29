import React from 'react';
import AppReducer from "./AppReducer";

const { useContext, createContext, useReducer } = require("react")
const initalState= {
    events:[]
}

export const GlobalContext  = createContext(initalState);

export const GlobalProvider = ({children}) => {

const [state,dispatch] = useReducer(AppReducer,initalState);

function addEvent(event){
    dispatch({
        type:'ADD_EVENT',
        payload:event
    });


}
function deleteEvent(event){
    dispatch({
        type:'DELETE_EVENT',
        payload:event
    });


}

return <GlobalContext.Provider value={{
    events: state.events,
    addEvent,
    deleteEvent

}}>
    {children}
</GlobalContext.Provider>


}