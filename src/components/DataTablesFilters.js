import React from 'react';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';





const DataTableFilters = (props) => {

    return(<Form>
        <Form.Row>            
          <Form.Group as={Col} controlId="rowSelections">
            <Form.Label>Rows</Form.Label>
            <Form.Control as="select" size="md" custom onChange={(event)=>props.handleRowChange(event.target.value)}>
              <option>10</option>
              <option>20</option>
              <option>30</option>
              <option>40</option>
              <option>50</option>
            </Form.Control>
          </Form.Group>

          <Form.Group as={Col} controlId="textSearch">
            <Form.Label>Text Search</Form.Label>
            <Form.Control name="textSearch" placeholder="Search.." onChange={(event)=>props.handleSearch(event.target.value)}/>
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
)

}

export default DataTableFilters
