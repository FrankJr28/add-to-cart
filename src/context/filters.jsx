import { createContext, useState } from "react";

//This is what we have to consum
export const FiltersContext = createContext()

//This give us access to the context
export function FiltersProvider ({children}) {

    const [filters, setFilters] = useState({
        category: 'all',
        minPrice: 800
    });

    return (
        <FiltersContext.Provider value={{
            filters,
            setFilters    
        }}>
            {children}
        </FiltersContext.Provider>
    )

}