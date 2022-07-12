import React, { useState } from 'react'
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
const NewEmployee = props => {
    const [employee, setEmployee] = useState({
        name: '',
        email: ''
    });

    const add = event => {

        event.preventDefault();

        // event.target
        // setEmployee
        // console.log(employee);
        props.handleSubmit(employee)
        setEmployee({ name: '', email: '' })
    }
    const handleChange = (event) => {
        event.preventDefault();
        setEmployee({
            ...employee,
            [event.target.name]: event.target.value
        });
        // console.log(employee);
    }
    return (
        <div  style={{border:"1px solid #dedede", borderRadius:'20px', width: '80%', margin:'20px'}}>
            <img src=''/>
            <label style={{textAlign:'center'}}>Add New Employee</label>
            <form style={{ margin: '20px' }} onSubmit={add}>

                <label for="name">Name</label>
                <input
                    type="text"
                    name="name"
                    id="name"
                    value={employee.name}
                    onChange={handleChange}
                />
                <label for="email">Email</label>
                <input
                    type="text"
                    name="email"
                    id="email"
                    value={employee.email}
                    onChange={handleChange}
                />
                <label for="email">Job Title</label>

                 <input
                    type="text"
                    name="email"
                    id="email"
                    // value={employee.email}
                    // onChange={handleChange}
                />

                <button >
                    Submit
                </button>

            </form>
        </div>

    )
}

export default NewEmployee
