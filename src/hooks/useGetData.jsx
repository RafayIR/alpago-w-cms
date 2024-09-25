import { createContext, useContext, useEffect, useState } from 'react';


const DataContext = createContext(null);


const ProvideData = ({ children, data }) => {
    const [stateData, setStateData] = useState(data)

    useEffect(() => {
        setStateData(data)
    }, [data])

    return (
        <DataContext.Provider value={stateData}>
            {children}
        </DataContext.Provider>
    )
}


export const useData = () => useContext(DataContext)


export default ProvideData