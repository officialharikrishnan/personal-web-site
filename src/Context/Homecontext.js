import { createContext, useState } from "react";

export const HomeRedirect=createContext(null)

export default function Context({children}){
    const [HomeButton,setHomeButton]=useState(null)
    console.log(HomeButton);
    return(
        <HomeRedirect.Provider value={{HomeButton,setHomeButton}}>
            {children}
        </HomeRedirect.Provider>
    )
}