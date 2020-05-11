import React, { useState, useEffect } from 'react';
import Table from 'react-bootstrap/Table'

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import axios from 'axios';


function Details(props) {
  
  const [booking, setBooking] = useState({ firstName: '', lastName: '', email: '', phoneNumber: '', numberOfWeeks: '', startDate: '', amount: '' })

  

  useEffect(() => {
    axios.get(`http://localhost:8080/api/booking_detail/${props.match.params.appointmentId}`)
      .then(response => {
        console.log(response.data)
        setBooking(response.data)
      }).catch(error => {
        console.log(error)
      })
  },[props.match.params.appointmentId])

  const DetailRow = (props) =>{
    return(    
      <tr>
      <td>{props.detailKey}</td>
      {props.detailType === 'string' && <td>{props.detailValue}</td>}
      {props.detailType === 'number' && <td>{props.detailValue}</td>}
      {props.detailType === 'date' && <td>{props.detailValue}</td>}
      
    </tr>
  
    )
  
  }

  return (
    
    <Container fluid>
    
    <Row>
    
    <Col><h4 className="font-weight-normal px-3 py-50 pt-md-5 pb-md-4 mx-auto"> Details</h4></Col>

    


    </Row>
    

    <Table  bordered hover responsive>            
            <tbody>
            <DetailRow detailKey='Name' detailValue={booking.firstName + ' '+ booking.lastName} detailType='string'/>
            <DetailRow detailKey='Email' detailValue={booking.email} detailType='string'/>
            <DetailRow detailKey='Date' detailValue={booking.startDate} detailType='date'/>
            <DetailRow detailKey='Amount' detailValue={booking.amount } detailType='number'/>
                                   
            </tbody>
            </Table>
    </Container>
   
  );

  
}




export default Details;
