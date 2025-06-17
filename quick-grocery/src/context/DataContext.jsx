import React , {createContext, useState} from 'react'

const DataContext = createContext([]);

const DataProvider = ({children})=>{
    const [data, setdata] = useState([]);

    return (
        <DataContext.Provider value={{data ,setdata}}>
            {children}
        </DataContext.Provider>
    )
}

export {DataContext , DataProvider};