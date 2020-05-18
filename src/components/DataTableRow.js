import React from 'react';

import Button from 'react-bootstrap/Button'

import Dropdown from 'react-bootstrap/Dropdown'
import ButtonGroup from 'react-bootstrap/ButtonGroup'



import Moment from 'react-moment';




 const DataTableRow = (props) => {
    return (

      <tr className={props.record.status === 2 ? 'table-success' : ''}>
        <td>{(props.index + 1)}</td>
        <td>
          <Button variant="link" onClick={() => { props.history.push(`/details/${props.record.appointmentId}`) }}>{props.record.appointmentReference}</Button>
        </td>
        <td>{props.record.firstName}</td>
        <td>{props.record.lastName}</td>
        <td>{props.record.email}</td>
        <td> <Moment format="MM/DD/yyyy">{props.record.startDate}</Moment></td>

        <td>
          <Dropdown as={ButtonGroup}>

            {<Button variant={props.record.status === 2 ? "danger" : "info"}
              onClick={() => props.handleStatus(props.record.appointmentId, props.record.status)}>
              {props.record.status === 2 ? "Remove confirmation" : "Confirm"}
            </Button>}


            <Dropdown.Toggle split variant={props.record.status === 2 ? "danger" : "info"} id="dropdown-split-basic" />

            <Dropdown.Menu>
              <Dropdown.Item onClick={() => props.handleEdit(props.record)}>Edit</Dropdown.Item>
              <Dropdown.Item onClick={() => props.handleDelete(props.record.appointmentId)}>Delete</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>

        </td>
      </tr>
    )
  }
  export default DataTableRow