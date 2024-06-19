import { createContext, useState } from "react";

export const ContextCreated = createContext();

export const ContextProvide = ( {children} ) => {
    const [obj,setObj ] = useState(
        {
            userName:'noni',
        }
    );
    return(
        <ContextCreated.Provider value={ { obj,setObj } }>
          {children}
        </ContextCreated.Provider>
    );
};