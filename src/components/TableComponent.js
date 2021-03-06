import React from 'react'
import BootstrapTable from 'react-bootstrap-table-next';
import { Container, Button, Row, Col } from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faInfo, faEdit, faTrash, faUserPlus } from '@fortawesome/free-solid-svg-icons'
import paginationFactory from 'react-bootstrap-table2-paginator';
import ToolkitProvider, { Search } from 'react-bootstrap-table2-toolkit';
import { Link } from 'react-router-dom';

const { SearchBar } = Search;

const columns = [{
    dataField: 'id',
    text: 'ID',
    sort: 'true',
    headerStyle: () => {
        return { width: "5%" };
    },
}, {
    dataField: 'nama',
    text: 'Nama',
    sort: 'true'
}, {
    dataField: 'jenis',
    text: 'Jenis',
    sort: 'true'
},
{
    dataField: "link",
    text: "Action",
    formatter: (rowContent, row) => {
        return (
            <div>
                <Link to={"detail/" + row.id}>
                    <Button color="success" className="mr-2">
                        <FontAwesomeIcon icon={faInfo} />Detail
                </Button>
                </Link>
                <Link to={"edit/" + row.id}>
                    <Button color="success" className="mr-2">
                        <FontAwesomeIcon icon={faEdit} />Edit
                </Button>
                </Link>
                <Link to={"delete/" + row.id}>
                    <Button color="success" className="mr-2">
                        <FontAwesomeIcon icon={faTrash} />Delete
                </Button>
                </Link>
            </div>
        )
    }
}];

const defaultSorted = [{
    dataField: 'id',
    order: 'asc'
}];

export const TableComponent = (props) => {
    return (
        <Container>
            <ToolkitProvider
                bootstrap4
                keyField='id'
                data={props.tanamans}
                columns={columns}
                defaultSorted={defaultSorted}
                search
            >
                {
                    props => (
                        <div>
                            <Row>
                                <Col>
                                    <Link to="/create">
                                        <Button color="success" className="mr-2">
                                            <FontAwesomeIcon icon={faUserPlus} />Create User
                </Button>
                                    </Link>
                                </Col>
                                <Col>
                                    <div className="float-right">
                                        <SearchBar {...props.searchProps} placeholder="search ..." />
                                    </div>
                                </Col>
                            </Row>
                            <BootstrapTable
                                {...props.baseProps} pagination={paginationFactory()}
                            />
                        </div>
                    )
                }
            </ToolkitProvider>
        </Container>
    )
}
