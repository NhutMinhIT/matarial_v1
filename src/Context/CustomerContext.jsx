import React from 'react'
import { createContext, useState, useEffect } from 'react'


const CustomerContext = createContext()

//properties {children}
export const CustomerProvider = ({ children }) => {
    const [customers, setCustomers] = useState([])
    useEffect(() => {
        const fecthData = async () => {
            const reposnse = await fetch('http://localhost:3001/customers')
            const responeJson = await reposnse.json()
            setCustomers(responeJson)
        }
        fecthData()
    }, [])
    return (
        <CustomerContext.Provider
            value={{ customers }}
        >
            {children}
        </CustomerContext.Provider>
    )
}

export default CustomerContext