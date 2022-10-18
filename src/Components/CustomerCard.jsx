import React, { useContext } from 'react'

import Card from '@mui/material/Card'
import CardHeader from '@mui/material/CardHeader'
import CardContent from '@mui/material/CardContent'
import IconButton from '@mui/material/IconButton'
import Typography from '@mui/material/Typography'
import DeleteIcon from '@mui/icons-material/Delete'
import { Rating } from '@mui/material'

import CustomerContext from '../Context/CustomerContext'

export const CustomerCard = ({ customer }) => {
    const { deleteCustomer } = useContext(CustomerContext)
    return (
        <Card>
            <CardHeader
                action={
                    <IconButton
                        onClick={() => deleteCustomer(customer.id)}
                    >
                        <DeleteIcon />
                    </IconButton>
                }
                title={customer.name} />
            <CardContent>
                <Typography
                    paragraph
                    align='justify'>
                    {customer.details}
                </Typography>
                <Typography
                    paragraph
                    align='justify'>
                    <Rating value={customer.rating} />
                </Typography>
            </CardContent>
        </Card >
    )
}
