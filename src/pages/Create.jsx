import React, { useContext, useState } from 'react';

import Container from '@mui/material/Container'
import Typography from '@mui/material/Typography'
import TextField from '@mui/material/TextField'
import ImageList from '@mui/material/ImageList';
import Button from '@mui/material/Button'
import Box from '@mui/material/Box'
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Radio from '@mui/material/Radio'
import Rating from '@mui/material/Rating'

import SendIcon from '@mui/icons-material/Send'

import CustomerContext from '../Context/CustomerContext';

const Create = () => {

    const { addCustomer } = useContext(CustomerContext)
    const [name, setName] = useState('');
    const [details, setDetails] = useState('');
    const [nameError, setNameError] = useState(false);
    const [detailsError, setDetailsError] = useState(false)
    const [gender, setGender] = useState('others')
    const [rating, setRating] = useState(5)

    const handleSubmit = (event) => {
        event.preventDefault()

        if (name && details) {
            // console.log(name, details, gender, rating)
            addCustomer({ name, details, gender, rating })
        }
        if (name == '') {
            setNameError(true)
        }
        if (details == '') {
            setDetailsError(true)
        }
    }
    return (
        <Container>
            <Typography
                variant='h3'
                align='center'
                gutterBottom={5}
            >
                Create New Customer
            </Typography>
            <form
                noValidate
                autoComplete='off'
                onSubmit={handleSubmit}
            >
                <Box pb={2}>
                    <TextField
                        label='Name'
                        variant='standard'
                        fullWidth
                        required
                        onChange={(e) => setName(e.target.value)}
                        error={nameError}
                    />
                    <TextField
                        label='Deatails'
                        variant='standard'
                        fullWidth
                        multiline
                        rows={3}
                        onChange={(e) => setDetails(e.target.value)}
                        error={detailsError}
                    />
                    <RadioGroup row
                        value={gender}
                        onChange={(e) => setGender(e.target.value)}
                    >
                        <FormControlLabel
                            value='male'
                            control={<Radio />}
                            label='Male'

                        />
                        <FormControlLabel
                            value='female'
                            control={<Radio />}
                            label='Female'
                        />
                        <FormControlLabel
                            value='others'
                            control={<Radio />}
                            label='Others'
                        />
                    </RadioGroup>
                    <Rating
                        value={rating}
                        onChange={(e) => setRating(~~e.target.value)}
                    >
                    </Rating>

                </Box>
                <Button
                    type='submit'
                    variant='contained'
                    startIcon={<SendIcon />}
                >
                    Submit
                </Button>
            </form>
        </Container >
    )
}

export default Create