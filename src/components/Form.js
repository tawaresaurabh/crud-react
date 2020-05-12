import React, { useState ,useEffect } from 'react';


import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import axios from 'axios';

import {Redirect,useHistory} from 'react-router-dom'





function AppForm(props) {
  const history = useHistory()
  
  const [appointmentId,setAppointmentId] = useState('')
  const[editMode,setEditMode] =  useState(false)
  
  const [bookingForm, setFormValues] = useState(
    { firstName: '', lastName: '', email: '', phoneNumber: '', numberOfWeeks: '', startDate: '', amount: '' }
  );


  useEffect(() => {
    if(props.location.state && props.location.state.record ){            
      let prevStartDate = props.location.state.record.startDate
      let newStartDate = prevStartDate.substring(0,10)
      props.location.state.record.startDate = newStartDate      
      setEditMode(true)
      setFormValues(props.location.state.record)     
    }        
  }, [props.location.state])

  const handleChange = (event) => {    
    setFormValues({ ...bookingForm, [event.target.name]: event.target.value })    
  }

  if (appointmentId) {    
    return <Redirect to={`/details/${appointmentId}`}/>;
  }
  

  const handleSubmit = (e) => {    
    e.preventDefault()    
    axios.post('http://localhost:8080/api/createBooking',bookingForm)
      .then(function (response) {
        console.log(response.data)
        setFormValues({ firstName: '', lastName: '', email: '', phoneNumber: '', numberOfWeeks: '', startDate: '', amount: '' })               
        setAppointmentId(response.data.appointmentId)
      }).catch(function (error) {
        console.log(error)
      })
  }

  const handleUpdate = (e) => {    
    e.preventDefault()    
    
    axios.put('http://localhost:8080/api/updateBooking',bookingForm)
      .then(function (response) {
        console.log(response.data)
        setFormValues({ firstName: '', lastName: '', email: '', phoneNumber: '', numberOfWeeks: '', startDate: '', amount: '' })               
        setAppointmentId(response.data.appointmentId )             
      }).then(function(){
        
      })
      
      .catch(function (error) {
        console.log(error)
      })
  }


  return (
    <Container fluid>

      <Row>

        <Col><h4 className="font-weight-normal"> Booking Form</h4></Col>



      </Row>
      <Row>
        <Col></Col>
        <Col><Form onSubmit={!editMode?handleSubmit:handleUpdate}>
          <Form.Row>


            <Form.Group as={Col} controlId="formGridfName">
              <Form.Label>First Name</Form.Label>
              <Form.Control required name="firstName" placeholder="First Name" value={bookingForm.firstName} onChange={handleChange} />
            </Form.Group>

            <Form.Group as={Col} controlId="formGridlName">
              <Form.Label>Last Name</Form.Label>
              <Form.Control required name="lastName" placeholder="Last Name" value={bookingForm.lastName} onChange={handleChange} />
            </Form.Group>
          </Form.Row>
          <Form.Row>
            <Form.Group as={Col} controlId="formGridEmail">
              <Form.Label>Email</Form.Label>
              <Form.Control required name="email" type="email" placeholder="Enter email" value={bookingForm.email} onChange={handleChange} />
            </Form.Group>
            <Form.Group as={Col} controlId="formGridPhone">
              <Form.Label>Phone</Form.Label>
              <Form.Control required name="phoneNumber" placeholder="Phone" value={bookingForm.phoneNumber} onChange={handleChange} />
            </Form.Group>
          </Form.Row>
          <Form.Row>

            <Form.Group as={Col} controlId="formGridWeeks">
              <Form.Label>Number of Weeks</Form.Label>
              <Form.Control required name="numberOfWeeks" type="number" value={bookingForm.numberOfWeeks} onChange={handleChange} />
            </Form.Group>
            <Form.Group as={Col} controlId="formGridDate">
              <Form.Label>Estimated Date</Form.Label>              
              <Form.Control required type="date" name="startDate"  value={bookingForm.startDate} onChange={handleChange} />
            </Form.Group>
          </Form.Row>

          <Form.Row>

            <Form.Group as={Col} controlId="formGridAmount">
              <Form.Label>Amount</Form.Label>
              <Form.Control name="amount" value={bookingForm.amount} onChange={handleChange} />
            </Form.Group>

          </Form.Row>
          <Form.Row>
          <Form.Group as={Col} controlId="formGridBtn">
          <Button  variant="primary" type="submit">{editMode?'Update':'Submit'}</Button>
            </Form.Group>

            <Form.Group as={Col} controlId="formGridBtn">
            {editMode && <Button  variant="primary" onClick={()=>{history.goBack()}}>Back</Button> }
            </Form.Group>

          
          
           

          </Form.Row>
          
          
          
        </Form></Col>
        <Col></Col>


      </Row>


    </Container>

  );



}


export default AppForm;
