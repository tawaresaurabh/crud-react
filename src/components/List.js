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

import Form from 'react-bootstrap/Form';

import Moment from 'react-moment';
import Spinner from 'react-bootstrap/Spinner'


//const testing  = axios.get('http://localhost:8080/api/activeBookings')
//todo - add search sort and

function List() {

  const[state,setState] = useState({
    bookingList:[],
    loading:true,
    searchString:'',
    pageRows:10,
    
  })
  const history = useHistory();
  
  useEffect(() => {
       
    axios.get('http://localhost:8080/api/activeBookings').then(response=>{
        console.log(response.data)
        setState(prevState => ({
          loading:false,
          bookingList:[...response.data]
        }))
      }).catch(error => {
        console.log(error)
      })        
  }, [])

  
  // const fetchBookingList = async () => {    
  //   getData.then(response => {
  //       console.log(response.data)
  //       setState({
  //         bookingList: [...response.data].filter((booking)=>{
  //           if(state.searchString){
  //             return booking.firstName.toLowerCase().includes(state.searchString.toLowerCase())
  //           }else{
  //               return true
  //           } 
  //         }),
  //         loading:false
  //       })               
  //     }).catch(error => {
  //       console.log(error)
  //     })
  // }

  const handleStatus = (id, status) => {
    let statusToBeupdated = 0
    if (status === 1) {
      statusToBeupdated = 2
    } else if (status === 2) {
      statusToBeupdated = 1
    }
    axios.put(`http://localhost:8080/api/updateStatus/${id}/${statusToBeupdated}`)
      .then(response => {
        console.log(response.data)
        setState({
          bookingList: [...response.data],
          loading:false
        })
      }).catch(function (error) {
        console.log(error)
      })

  }

  const handleEdit = (record) => {
    history.push('/form', { record: record })

  }

  const handleDelete = (id) => {
    axios.put(`http://localhost:8080/api/inactivateBooking/${id}`)
      .then(response => {
        console.log(response.data)
        setState({
          bookingList: [...response.data],
          loading:false
        })
      }).catch(function (error) {
        console.log(error)
      })


  }

  const handleRowChange = (event) => {    
    // setState({
    //   pageRows:event.target.value
    // })
   
  }

  const handleSearch=(event)=>{    
    // setState({
    //   searchString: event.target.value.toLowerCase()      
    // })
   
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
        <td> <Moment format="MM/DD/yyyy">{props.record.startDate}</Moment></td>

        <td>
          <Dropdown as={ButtonGroup}>

            {<Button variant={props.record.status === 2 ? "danger" : "info"}
              onClick={() => handleStatus(props.record.appointmentId, props.record.status)}>
              {props.record.status === 2 ? "Remove confirmation" : "Confirm"}
            </Button>}


            <Dropdown.Toggle split variant={props.record.status === 2 ? "danger" : "info"} id="dropdown-split-basic" />

            <Dropdown.Menu>
              <Dropdown.Item onClick={() => handleEdit(props.record)}>Edit</Dropdown.Item>
              <Dropdown.Item onClick={() => handleDelete(props.record.appointmentId)}>Delete</Dropdown.Item>
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
      {state.loading && <Spinner animation="grow" />}
     
      {!state.loading &&
      <Row>
        <Form>
          <Form.Row>            
            <Form.Group as={Col} controlId="rowSelections">
              <Form.Label>Rows</Form.Label>
              <Form.Control as="select" size="md" custom onChange={handleRowChange}>
                <option>10</option>
                <option>20</option>
                <option>30</option>
                <option>40</option>
                <option>50</option>
              </Form.Control>
            </Form.Group>

            <Form.Group as={Col} controlId="textSearch">
              <Form.Label>Text Search</Form.Label>
              <Form.Control name="textSearch" placeholder="Search.." value={state.searchString} onChange={handleSearch}/>
            </Form.Group>

            <Form.Group as={Col} controlId="startDate">
              <Form.Label>Start Date</Form.Label>
              <Form.Control type="date" name="startDate" />
            </Form.Group>

            <Form.Group as={Col} controlId="endDate">
              <Form.Label>End Date </Form.Label>
              <Form.Control type="date" name="endDate" />
            </Form.Group>
          </Form.Row>
        </Form>

      </Row>
      }

      <Row>

        <Table hover responsive>
          <thead>
            <tr>
            <th>#</th>
              <th >Reference</th>
              <th >First Name</th>
              <th >Last Name</th>
              <th>Email</th>
              <th>Date</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {
              state.bookingList.map((record, index) => (
                <TableRow key={index} record={record} index={index}></TableRow>

              ))
            }
          </tbody>
        </Table>
      </Row>

    </Container>
  );
}


export default List;
