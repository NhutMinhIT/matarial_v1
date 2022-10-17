import React from 'react'

import Card from '@mui/material/Card'
import CardHeader from '@mui/material/CardHeader'
import CardContent from '@mui/material/CardContent'
import IconButton from '@mui/material/IconButton'
import Typography from '@mui/material/Typography'
import DeleteIcon from '@mui/icons-material/Delete'
import { Rating } from '@mui/material'

export const CustomerCard = ({ customer }) => {
    return (
        <Card>
            <CardHeader
                action={
                    <IconButton>
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
        </Card>
    )
}
