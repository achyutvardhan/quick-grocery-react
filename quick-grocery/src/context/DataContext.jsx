import React , {createContext, useState} from 'react'

const DataContext = createContext([]);

const DataProvider = ({children})=>{
    const [data, setData] = useState([]);
    const responseHandler = (data)=>{
        // console.log(data)
         setData(data);}
    return (
        <DataContext.Provider value={{data ,responseHandler}}>
            {children}
        </DataContext.Provider>
    )
}

export {DataContext , DataProvider};