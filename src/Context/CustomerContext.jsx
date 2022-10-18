import React, { createContext, useEffect } from 'react'
import { useState } from 'react'


const CustomerContext = createContext()

export const CustomerProvider = ({ children }) => {
    const [customers, setCustomers] = useState([]);

    useEffect(() => {
        const fecthData = async () => {
            const respone = await fetch('http://localhost:3001/customers');
            const responeJSON = await respone.json()
            setCustomers(responeJSON);
        }
        fecthData()
    }, [])
    // Hàm ADD
    const addCustomer = async ({ name, details, gender, rating }) => {
        const response = await fetch('http://localhost:3001/customers', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ name, details, gender, rating })
        });
        const data = response.json()

        setCustomers([data, ...customers])
    }

    // Hàm delete
    const deleteCustomer = async (id) => {
        await fetch(`http://localhost:3001/customers/${id}`, { method: `DELETE` });
        setCustomers(customers.filter((customer) => customer.id !== id))
    }

    return (
        <CustomerContext.Provider
            value={{ customers, deleteCustomer, addCustomer }}>
            {children}
        </CustomerContext.Provider>
    )
}
export default CustomerContext