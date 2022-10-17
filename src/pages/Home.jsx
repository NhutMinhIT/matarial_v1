import React, { useContext, useEffect, useState } from 'react'

import Container from '@mui/material/Container'
import Typography from '@mui/material/Typography'
import Grid from '@mui/material/Grid'
import Paper from '@mui/material/Paper'
import Rating from '@mui/material/Rating'

import { CustomerCard } from '../Components/CustomerCard'

import CustomerContext from '../Context/CustomerContext'
const Home = () => {
    //import from Customer Context
    const { customers } = useContext(CustomerContext)
    // const [customers, setCustomers] = useState([])
    // useEffect(() => {
    //     const fecthData = async () => {
    //         const reposnse = await fetch('http://localhost:3001/customers')
    //         const responeJson = await reposnse.json()
    //         setCustomers(responeJson)
    //     }
    //     fecthData()
    // }, [])


    return (
        <Container>
            <Typography
                variant='h3'
                gutterBottom
                align='center'
                p={3}
            >
                Let's Me NhutMinh
            </Typography>
            <Grid container p={5} spacing={5}>
                {customers && customers.map((customer) => (
                    <Grid item xs={4} key={customer.id}>
                        <CustomerCard customer={customer} />
                    </Grid>
                ))}
            </Grid>
        </Container>
    )
}

export default Home