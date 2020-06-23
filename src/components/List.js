import React, {  useEffect } from 'react';
import { connect } from 'react-redux'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import { useHistory } from 'react-router-dom'
import Spinner from 'react-bootstrap/Spinner'

import DataTable from './DataTable'
import { handleListActionRecordRequest,handleListActionRecordSucess,handleListActionRecordFailed,handleListActionLoaderShown,handleListActionLoaderRemoved, handleListActionSearch,handleListActionConfirmation,
  handleListActionDelete,handleListActionEdit} from '../actions/ListActions'

  

  


function List({handleListActionRecordRequest,handleListActionRecordSucess,handleListActionRecordFailed,handleListActionLoaderShown,handleListActionLoaderRemoved, handleListActionSearch,handleListActionConfirmation,
  handleListActionDelete,handleListActionEdit,loading,
  records,
  query,
}) {

 
  const history = useHistory();



  useEffect(() => {   
    handleListActionRecordRequest()
  }, [handleListActionRecordRequest])

  

  // useEffect(() => {
  //   if (props.query && props.query.length > 1) {
  //     axios.get(`http://localhost:8080/api/filteredBookings?firstName=${state.query}`)
  //       .then(({ data }) => {
  //         console.log(data)
  //         setState({
  //           records: data,
  //           loading: false
  //         })
  //       })
  //   }
  // }, [state.query])



  



  // const handleStatus = (id, status) => {
  //   let statusToBeupdated = 0
  //   if (status === 1) {
  //     statusToBeupdated = 2
  //   } else if (status === 2) {
  //     statusToBeupdated = 1
  //   }
  //   axios.put(`http://localhost:8080/api/updateStatus/${id}/${statusToBeupdated}`)
  //     .then(response => {
  //       console.log(response.data)
  //       setState({
  //         records: [...response.data],
  //         loading: false
  //       })
  //     }).catch(function (error) {
  //       console.log(error)
  //     })

  // }

  // const handleEdit = (record) => {
  //   history.push('/form', { record: record })

  // }

  // const handleDelete = (id) => {
  //   axios.put(`http://localhost:8080/api/inactivateBooking/${id}`)
  //     .then(response => {
  //       console.log(response.data)
  //       setState({
  //         records: [...response.data],
  //         loading: false
  //       })
  //     }).catch(function (error) {
  //       console.log(error)
  //     })


  // }

  const handleRowChange = (rows) => {
    console.log(rows)
    // setState({
    //   pageRows:event.target.value
    // })

  }

  // const handleSearch = (query) => {
  //   if (query && query.length > 1) {
  //     setState({ query })
  //   } else {
  //     getAllData()
  //   }
  // }

  
  return (
    <Container fluid>


      <Row>
        <Col><h4 className="font-weight-normal">Booking List</h4></Col>
      </Row>

      
      <Row>
        {loading && <Spinner animation="grow" />}
      </Row>


      <DataTable records={records}
        history={history}
        handleRowChange={handleRowChange}
        handleSearch={handleListActionSearch}
        handleStatus={handleListActionConfirmation}
        handleEdit={handleListActionEdit}
        handleDelete={handleListActionDelete} />

    </Container>
  );
}

const mapStateToProps = ({ loading, records, query }) => ({
  loading,
  records,
  query,

})

const mapDispatchToProps = (dispatch) => ({

  handleListActionRecordRequest: () => dispatch(handleListActionRecordRequest()),
  handleListActionRecordSucess: () => dispatch(handleListActionRecordSucess()),
  handleListActionRecordFailed: () => dispatch(handleListActionRecordFailed()),
  
  handleListActionLoaderShown: () => dispatch(handleListActionLoaderShown()),
  handleListActionLoaderRemoved: () => dispatch(handleListActionLoaderRemoved()),
  handleListActionSearch: () => dispatch(handleListActionSearch()),
  handleListActionConfirmation: () => dispatch(handleListActionConfirmation()),
  handleListActionDelete: () => dispatch(handleListActionDelete()),
  handleListActionEdit: () => dispatch(handleListActionEdit()),



})


export default connect(
  mapStateToProps,
  mapDispatchToProps

)(List);
