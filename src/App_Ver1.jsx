import './App.css';
//Button
import Button from '@mui/material/Button';
//Stack
import Stack from '@mui/material/Stack'
//Iocn Delete and Send
import DeleteIcon from '@mui/icons-material/Delete'
import SendIcon from '@mui/icons-material/Send'
//Box component
import Box from '@mui/material/Box'
//Typography component
import Typography from '@mui/material/Typography';
//AppBar and ToolBar component
import AppBar from '@mui/material/AppBar';
import ToolBar from '@mui/material/Toolbar';
//login Icon and Account icon 
import LoginIcon from '@mui/icons-material/Login';
import PersonAddAltIcon from '@mui/icons-material/PersonAddAlt';
// Grid Layout
import Grid from '@mui/material/Grid'

//Acordion conponents
import Accordion from '@mui/material/Accordion'
import AccordionSummary from '@mui/material/AccordionSummary'
import AccordionDetails from '@mui/material/AccordionDetails'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'

//Form
import Radio from '@mui/material/Radio'
import RadioGroup from '@mui/material/RadioGroup'
import FormControlLabel from '@mui/material/FormControlLabel'
import FormControl from '@mui/material/FormControl'
import FormLabel from '@mui/material/FormLabel'

function App() {
  return (
    <div className="App">
      <AppBar position='static'>
        <ToolBar>
          <Typography variant='h4'
            sx={{ flexGrow: 1 }}
            align='left'
            color='black'
            fontWeight={700}>
            NhutMinh
          </Typography>
          <Button
            color='inherit'
            startIcon={<LoginIcon />}>
            Login
          </Button>
          <Button
            color='inherit'
            startIcon={<PersonAddAltIcon />}>
            Sign Up
          </Button>
        </ToolBar>
      </AppBar>
      <Box mt={5}>
        <Typography variant='h1' gutterBottom={5}>
          Let's Me NhutMinh
        </Typography>
        <Typography
          variant='h3'
          gutterBottom={5}>
          This my app MUI-5
        </Typography>
        <Typography
          variant='subtitle1'
          align='justify'
          p={5}
          mt={5}>
          This works great when the changes can be isolated to a new DOM element.
          For instance, you can change the margin this way.

          However, sometimes you have to target the underlying DOM element.
          As an example, you may want to change the border of the Button.
          The Button component defines its own styles. CSS inheritance doesn't help.
          To workaround the problem, you can use the sx prop directly on the child if it is a MUI component.
        </Typography>
      </Box>
      <Grid container p={5} spacing={5}>
        <Grid item xs={4}>
          <Typography
            paragraph={true}
            align='justify'>
            This works great when the changes can be isolated to a new DOM element.
            For instance, you can change the margin this way.

            However, sometimes you have to target the underlying DOM element.
            As an example, you may want to change the border of the Button.
            The Button component defines its own styles. CSS inheritance doesn't help.
            To workaround the problem, you can use the sx prop directly on the child if it is a MUI component.
          </Typography>
          <Accordion>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls='panel1-content'
              id='panel1-header'>
              <Typography>
                Bootstrap 5
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                This is CSS framework to build Website quickly.
                Bootstrap is very easy to learn
              </Typography>
            </AccordionDetails>
          </Accordion>
          <Accordion>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls='panel1-content'
              id='panel2-header'>
              <Typography>
                Material UI V5
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                This is CSS framework to build Website quickly.
                This is good for ReactJS
              </Typography>
            </AccordionDetails>
          </Accordion>
        </Grid>
        <Grid item xs={8}>
          <Typography
            paragraph={true}
            align='justify'>
            This works great when the changes can be isolated to a new DOM element.
            For instance, you can change the margin this way.

            However, sometimes you have to target the underlying DOM element.
            As an example, you may want to change the border of the Button.
            The Button component defines its own styles. CSS inheritance doesn't help.
            To workaround the problem, you can use the sx prop directly on the child if it is a MUI component.
          </Typography>
          <FormControl>
            <FormLabel>
              Which framework would you like to use?
            </FormLabel>
            <RadioGroup
              row defaultValue='css' >
              <FormControlLabel
                value='css'
                control={<Radio />}
                label='CSS'
              />
              <FormControlLabel
                value='bootstrap'
                control={<Radio />}
                label='Bootstrap' />
              <FormControlLabel
                value='react'
                control={<Radio />}
                label='ReactJS'
              />
              <FormControlLabel
                value='vue'
                control={<Radio />}
                label='VueJS'
              />
              <FormControlLabel
                value='others'
                control={<Radio />}
                label='Others'
              />
            </RadioGroup>
          </FormControl>
        </Grid>
        <Stack direction='row'
          spacing={5}
          paddingTop={15}
          paddingLeft={75}>
          <Button variant='text'>Click Me</Button>
          <Button variant='contained'>Submit</Button>
          <Button color='myColor' variant='outlined'>Sign In</Button>
          <Button disabled>Disabled</Button>
          <Button variant='outlined'
            startIcon={<DeleteIcon />}>Delete</Button>
          <Button variant='outlined'
            startIcon={<SendIcon />}>Send</Button>
        </Stack>
      </Grid>


    </div >
  );
}

export default App;
