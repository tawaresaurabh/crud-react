import React, { useState, useEffect } from 'react';
import Table from 'react-bootstrap/Table'
import Button from 'react-bootstrap/Button'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import axios from 'axios';
import { useHistory } from 'react-router-dom'

import Dropdown from 'react-bootstrap/Dropdown'
import ButtonGroup from 'react-bootstrap/ButtonGroup'





function List() {
  const history = useHistory();
  
  const [bookingList, setBookingList] = useState([])
  useEffect(() => {
    fetchBookingList()    
  }, [])

  const fetchBookingList = async()=>{
    console.log('Fecting list data')
    axios.get('http://localhost:8080/api/activeBookings')
    .then(response => {    
      console.log(response.data)  
      setBookingList(response.data)
    }).catch(error => {
      console.log(error)
    })
  }

  const handleStatus = (id, status) => {
    let statusToBeupdated = 0    
    if(status===1){
      statusToBeupdated = 2
    }else if(status===2){
      statusToBeupdated = 1
    }    
    axios.put(`http://localhost:8080/api/updateStatus/${id}/${statusToBeupdated}`)      
    .then(response => {    
      console.log(response.data)  
      setBookingList(response.data)
    }).catch(function (error) {
        console.log(error)
      }) 
    
  }

  const handleDelete = (id) => {
    axios.put(`http://localhost:8080/api/inactivateBooking/${id}`)      
    .then(response => {    
      console.log(response.data)  
      setBookingList(response.data)
    }).catch(function (error) {
        console.log(error)
      }) 
    

  }

  const TableRow = (props) => {
    return (

      <tr className={props.record.status === 2 ? 'table-success' : ''}>
        <td>{(props.index + 1)}</td>
        <td>
          <Button variant="link" onClick={() => { history.push(`/details/${props.record.appointmentId}`) }}>{props.record.appointmentReference}</Button>
        </td>
        <td>{props.record.firstName}</td>
        <td>{props.record.lastName}</td>
        <td>{props.record.email}</td>
        <td>
          <Dropdown as={ButtonGroup}>

            {<Button variant={props.record.status === 2 ? "danger" : "info"} 
                     onClick={() => handleStatus(props.record.appointmentId, props.record.status)}>
                     {props.record.status === 2 ? "Remove confirmation" : "Confirm"} 
              </Button>}


            <Dropdown.Toggle split variant={props.record.status === 2 ? "danger" : "info"} id="dropdown-split-basic" />

            <Dropdown.Menu>
              <Dropdown.Item href="/form">Edit</Dropdown.Item>
              <Dropdown.Item onClick={()=>handleDelete(props.record.appointmentId)}>Delete</Dropdown.Item>              
            </Dropdown.Menu>
          </Dropdown>

        </td>
      </tr>
    )
  }


  return (
    <Container fluid>

      <Row>
        <Col><h4 className="font-weight-normal">Booking List</h4></Col>
      </Row>
      <div>
        <Row></Row>
        <Row>

          <Table hover responsive>
            <thead>

              <tr><th>#</th>
                <th >Reference</th>
                <th >First Name</th>
                <th >Last Name</th>
                <th>Email</th>
                <th>Actions</th>

              </tr>
            </thead>
            <tbody>
              {
                bookingList.map((record, index) => (
                  <TableRow key={index} record={record} index={index}></TableRow>

                ))

              }


            </tbody>
          </Table>



        </Row>
        <Row></Row>
      </div>


    </Container>
  );
}


export default List;
