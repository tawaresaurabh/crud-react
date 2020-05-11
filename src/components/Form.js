import React, { useState } from 'react';


import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import axios from 'axios';



function AppForm() {
  
  const [bookingForm, setFormValues] = useState(
    { firstName: '', lastName: '', email: '', phoneNumber: '', numberOfWeeks: '', startDate: '', amount: '' }
  );

  const handleChange = (event) => {
    setFormValues({ ...bookingForm, [event.target.name]: event.target.value })
  }

  const handleSubmit = (e) => {    
    e.preventDefault()    
    axios.post('http://localhost:8080/api/createBooking',bookingForm)
      .then(function (response) {
        console.log(response)
      })
      .catch(function (error) {
        console.log(error)
      })
  }

  return (
    <Container fluid>

      <Row>

        <Col><h4 className="font-weight-normal px-3 py-50 pt-md-5 pb-md-4 mx-auto"> Booking Form</h4></Col>



      </Row>
      <Row>
        <Col></Col>
        <Col><Form onSubmit={handleSubmit}>
          <Form.Row>


            <Form.Group as={Col} controlId="formGridfName">
              <Form.Label>First Name</Form.Label>
              <Form.Control name="firstName" placeholder="First Name" value={bookingForm.firstName} onChange={handleChange} />
            </Form.Group>

            <Form.Group as={Col} controlId="formGridlName">
              <Form.Label>Last Name</Form.Label>
              <Form.Control name="lastName" placeholder="Last Name" value={bookingForm.lastName} onChange={handleChange} />
            </Form.Group>
          </Form.Row>
          <Form.Row>
            <Form.Group as={Col} controlId="formGridEmail">
              <Form.Label>Email</Form.Label>
              <Form.Control name="email" type="email" placeholder="Enter email" value={bookingForm.email} onChange={handleChange} />
            </Form.Group>
            <Form.Group as={Col} controlId="formGridPhone">
              <Form.Label>Phone</Form.Label>
              <Form.Control name="phoneNumber" placeholder="Phone" value={bookingForm.phoneNumber} onChange={handleChange} />
            </Form.Group>
          </Form.Row>
          <Form.Row>

            <Form.Group as={Col} controlId="formGridWeeks">
              <Form.Label>Number of Weeks</Form.Label>
              <Form.Control name="numberOfWeeks" type="number" value={bookingForm.numberOfWeeks} onChange={handleChange} />
            </Form.Group>
            <Form.Group as={Col} controlId="formGridDate">
              <Form.Label>Estimated Date</Form.Label>
              <Form.Control name="startDate" value={bookingForm.startDate} onChange={handleChange} />
            </Form.Group>
          </Form.Row>

          <Form.Row>

            <Form.Group as={Col} controlId="formGridAmount">
              <Form.Label>Amount</Form.Label>
              <Form.Control name="amount" value={bookingForm.amount} onChange={handleChange} />
            </Form.Group>

          </Form.Row>


          <Button variant="primary" type="submit">Submit</Button>
        </Form></Col>
        <Col></Col>


      </Row>


    </Container>

  );



}


export default AppForm;
