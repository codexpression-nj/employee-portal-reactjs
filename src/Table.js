import React, { useState } from 'react'
import { Button } from 'react-bootstrap';
import Modal from 'react-bootstrap/Modal'
import Form from 'react-bootstrap/Form'
import ModalUpdate from './ModalUpdate';
const TableHeader = () => {

    return (
        <thead>
            <tr>
                <th>Name</th>
                <th>email</th>
                <th>Remove</th>
                <th>Update</th>
            </tr>
        </thead>
    )
}
const TableBody = props => {

    const rows = props.employeeList.map((row, index) => {
        return (
            <tr key={index}>
                <td> {row.name} </td>
                <td>{row.email}</td>
                <td><button style={{ backgroundColor: 'red' }} onClick={() => props.removeEmployee(index)}>Delete</button></td>
                {/* <td><button onClick={() => props.update(index)}>Update</button></td> */}
                <td>  
                <ModalUpdate updateEmpl={props.update}  index={index} employee={row}/>
        </td>
            </tr>
        );
    });

    return <tbody>{rows}</tbody>;
}


const Table = (props) => {
    const { employeeList, removeEmployee, update } = props;
    return (
        <table style={{margin:"20px"}}>
            <TableHeader />
            <TableBody employeeList={employeeList} removeEmployee={removeEmployee} update={update}/>

        </table>
    );
}


export default Table
