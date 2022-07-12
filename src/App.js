import logo from './logo.svg';
import './App.css';
import Table from './Table';
import { useState } from 'react';
import NewEmployee from './NewEmployee';
import ModalUpdate from './ModalUpdate';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import image2 from './assets/image2.jpg'
import { Card } from 'react-bootstrap';
function App() {
  const [characters, setCharacters] = useState([
    { name: 'Taylor', email: 'taylor@mail.com' },
    { name: 'Alice', email: 'alice@mail.com' },
    { name: 'Bob', email: 'bob@mail.com' }
  ]);

  const removeCharacter = index => {

    setCharacters([
      ...characters.slice(0, index),
      ...characters.slice(index + 1, characters.length)
    ]);

  }
        
  const handleSubmit = character => {
    console.log(character);
    setCharacters([
      ...characters,
      {
        name: character.name,
        email: character.email
      }
    ]);
  }
  
  const update = (employee, index, handleClose) => {
    setCharacters([
      ...characters.slice(0, index),
      employee,
      ...characters.slice(index + 1, characters.length)
    ]);
    handleClose()
  }
 
  return (
    <div >
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Employee Portal
          </Typography>
        </Toolbar>
      </AppBar>
      <Grid container  spacing={2} >
        <Grid  item xs={6} md={4}  style={{display: 'flex', width:'100%'}}>
        {/* <label>Employees</label> */}
          <NewEmployee handleSubmit={handleSubmit}></NewEmployee>
        </Grid >
        <Grid  item xs={6} md={8} style={{marginTop:'40px'}}>
         <label>Emdployees</label>
       <Table  employeeList={characters} removeEmployee={removeCharacter} update={update} ></Table>

     </Grid>

      </Grid>

    </div>

  );
}

export default App;
