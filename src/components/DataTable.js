import React from 'react';
import Table from 'react-bootstrap/Table'
import DataTableRow from './DataTableRow'
import DataTableFilters from './DataTablesFilters'
import Row from 'react-bootstrap/Row';


const DataTable = (props) => {
    return (
        <>

            <Row>
                <DataTableFilters {...props} />
            </Row>
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
                    {props.records && props.records.map((record, index) => (
                            <DataTableRow key={index} index={index} record={record} {...props} />
                        ))}                        
                    </tbody>
                </Table>



            </Row>

            <Row>

            </Row>
        </>


    )


}

export default DataTable