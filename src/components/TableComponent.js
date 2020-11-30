import React from 'react'
import BootstrapTable from 'react-bootstrap-table-next';
import { Container, Button } from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faInfo, faEdit, faTrash } from '@fortawesome/free-solid-svg-icons'

const columns = [{
    dataField: 'id',
    text: 'ID',
    headerStyle: () => {
        return {width : "5%"};
    },
}, {
    dataField: 'nama',
    text: 'Nama'
}, {
    dataField: 'jenis',
    text: 'Jenis'
},
{
    dataField: "link",
    text: "Action",
    formatter: (rowContent, row) => {
        return (
            <div>
                <Button color="success" className="mr-2">
                    <FontAwesomeIcon icon={faInfo} />Detail
                </Button>
                <Button color="success" className="mr-2">
                    <FontAwesomeIcon icon={faEdit} />Edit
                </Button>
                <Button color="success" className="mr-2">
                    <FontAwesomeIcon icon={faTrash} />Delete
                </Button>
            </div>
        )
    }
}];

export const TableComponent = (props) => {
    return (
        <div>
            <Container>
                <BootstrapTable keyField='id' data={props.tanamans} columns={columns} />
            </Container>
        </div>
    )
}
