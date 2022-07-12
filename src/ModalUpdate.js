import React,{useState} from 'react'
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
const ModalUpdate = props => {
    const [open, setOpen] = React.useState(false);
    const { employee, index } = props;
    const [newValue , setNewValue] = useState({name:employee.name, email:employee.email})
    const handleClickOpen = () => {
      setOpen(true);
      console.log(employee)   
    console.log(index); 
  };
  
    const handleClose = () => {
      setOpen(false);
    };

 
   const handlChange = (event) =>{
    event.preventDefault();
    setNewValue({
      ...newValue,
      [event.target.name]: event.target.value
    });
    
   
    }
   
    return (
        <div>
        <Button variant="contained" onClick={handleClickOpen}>
          Update
        </Button>
        <Dialog open={open} onClose={handleClose} style={{width:'100%'}}>
          <DialogTitle>Update</DialogTitle>
          <DialogContent>
         
        
                <label for="email">Email</label>
               <input 
            type="text" 
            name="email" 
            id="email"
            value={newValue.email}
            onChange={handlChange}
          />
              <label for="name">Name</label>
               <input 
            type="text" 
            name="name" 
            id="name"
            value={newValue.name}
            onChange={handlChange}
          />
          </DialogContent>
          <DialogActions>
            <Button style={{ backgroundColor: 'red' }} onClick={handleClose}>Cancel</Button>
            <Button  onClick={() => props.updateEmpl(newValue,index,handleClose)}>Save Changes</Button>
          </DialogActions>
        </Dialog>
      </div>
    )
}

export default ModalUpdate
