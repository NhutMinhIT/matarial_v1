import React, { useContext, useEffect, useState } from 'react'

import Container from '@mui/material/Container'
import Typography from '@mui/material/Typography'
import Grid from '@mui/material/Grid'
import Box from '@mui/material/Box'
import Drawer from '@mui/material/Drawer'
import List from '@mui/material/List'
import ListItem from '@mui/material/ListItem'
import ListItemIcon from '@mui/material/ListItemIcon'
import ListItemText from '@mui/material/ListItemText'
import InboxIcon from '@mui/icons-material/MoveToInbox'

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
            <Box sx={{ display: 'flex' }}>
                <Box>
                    <Drawer
                        variant='permanent'
                        anchor='left'
                    >
                        <List>
                            <ListItem component='a' href='/create'>
                                <ListItemIcon>
                                    <InboxIcon />
                                </ListItemIcon>
                                <ListItemText
                                    primary='Create new Customer'
                                >

                                </ListItemText>
                            </ListItem>
                        </List>
                    </Drawer>
                </Box>
                <Box
                    href='main'
                    sx={{ flexGrow: 1, p: 3 }}>
                    <Grid container p={5} spacing={5}>
                        {customers && customers.map((customer) => (
                            <Grid item xs={4} key={customer.id}>
                                <CustomerCard customer={customer} />
                            </Grid>
                        ))}
                    </Grid>
                </Box>

            </Box>
        </Container>
    )
}

export default Home