import React, { useState, useEffect } from 'react';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import axios from 'axios';
import { useHistory } from 'react-router-dom'
import Spinner from 'react-bootstrap/Spinner'

import DataTable from './DataTable'





function List() {

  const [state, setState] = useState({
    records: [],
    loading: true,
    query: '',
    pageRows: 10,

  })
  const history = useHistory();

  useEffect(() => {   
    getAllData()
  }, [])

  useEffect(() => {    
    if (state.query && state.query.length > 1) {      
      axios.get(`http://localhost:8080/api/filteredBookings?firstName=${state.query}`)
        .then(({ data }) => {
          console.log(data)
          setState({
            records: data,
            loading:false
          })
        })
    } 
  }, [state.query])



  const getAllData = () => {
    axios.get(`http://localhost:8080/api/activeBookings`)
      .then(({ data }) => {
        console.log(data)
        setState({
          records: data,
          loading:false
        })
      })
  }



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
          records: [...response.data],
          loading: false
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
          records: [...response.data],
          loading: false
        })
      }).catch(function (error) {
        console.log(error)
      })


  }

  const handleRowChange = (rows) => {
    console.log(rows)
    // setState({
    //   pageRows:event.target.value
    // })

  }

  const handleSearch = (query) => {
    if (query && query.length > 1) {     
      setState({query})
    }else{
      getAllData()
    }    
  }

  return (
    <Container fluid>

      <Row>
        <Col><h4 className="font-weight-normal">Booking List</h4></Col>
      </Row>
      <Row>
      {state.loading && <Spinner animation="grow" />}
      </Row>
      

      <DataTable records={state.records}
        history={history}
        handleRowChange={handleRowChange}
        handleSearch={handleSearch}
        handleStatus={handleStatus}
        handleEdit={handleEdit}
        handleDelete={handleDelete} />

    </Container>
  );
}


export default List;
