import React,{ createContext, useState } from "react";


export const SearchContext = createContext();

export const SearchProvider = ({children}) => {
    const [searchText,setSearchText] = useState("");

    return(
        <SearchContext.Provider value={{searchText,setSearchText}}>
            {children}
        </SearchContext.Provider>
    )
};