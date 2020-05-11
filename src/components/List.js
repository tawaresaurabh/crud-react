import React, { useState, useEffect } from 'react';
import Table from 'react-bootstrap/Table'
import Button from 'react-bootstrap/Button'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import axios from 'axios';
import {useHistory} from 'react-router-dom'




function List() {
  const history = useHistory();
  
  const [bookingList, setBookingList] = useState([])
  useEffect(  () => {        
    axios.get('http://localhost:8080/api/booking_list')
      .then(response => {
        console.log(response.data)
        setBookingList(response.data)
      }).catch(error => {
        console.log(error)
      })
  }, [])

  const TableRow = (props) =>{
    return(    
      <tr>
      <td>{(props.index + 1)}</td>
      <td>
        <Button variant="link" onClick={() => {history.push(`/details/${props.record.appointmentId}`)}}>{props.record.appointmentReference}</Button>
      </td>            
      <td>{props.record.firstName}</td>
      <td>{props.record.lastName}</td>
      <td>{props.record.email}</td>
    </tr>  
    )  
  }


  return (
    <Container fluid>

      <Row>
        <Col><h4 className="font-weight-normal px-3 py-50 pt-md-5 pb-md-4 mx-auto">Booking List</h4></Col>       
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

              </tr>
            </thead>
            <tbody>
              {
                bookingList.map((record, index) => (
                  <TableRow key={index}  record={record} index={index}></TableRow>
                  
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
