"use client"

import React, {createContext,useContext,useState,useEffect} from "react";

type TThemeContextType = {
    mode:string;
    setMode:(s:string)=>void;
}

const ThemeContext = createContext<TThemeContextType | undefined>(undefined);

export function ThemeProvider ({children}:{children:React.ReactNode}){
    const [mode, setMode] = useState('');

    const handleChange = () => {
        if (mode === "dark"){
            setMode("light");
            document.documentElement.classList.add('light');
        }else {
            setMode("dark");
            document.documentElement.classList.add('dark');
        }
    };

    useEffect(()=>{handleChange()},[mode]);

    return (
        <ThemeContext.Provider value={{mode,setMode}}>
            {children}
        </ThemeContext.Provider>
    )
}

export function useTheme(){
    const context = useContext(ThemeContext);

    if (context===undefined){
        throw new Error('useTheme must be used within a ThemeProvider');
    }

    return context;
}