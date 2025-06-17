import React , {createContext , use, useState} from 'react'

const DataContext = createContext([]);

const DataProvider = ({children})=>{
    const [data, setdata] = useState([]);
    
    <DataContext.Provider value={{data ,setdata}}>
        {children}
    </DataContext.Provider>

}

export {DataContext , DataProvider};