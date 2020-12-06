import React, { Component } from 'react'
import { Container } from 'reactstrap'
import BackComponent from '../components/BackComponent'

export default class EditContainer extends Component {
    render() {
        return (
            <Container>
                <BackComponent />
                <h1>Edit User</h1>
            </Container>
        )
    }
}
