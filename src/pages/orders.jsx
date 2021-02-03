import React from 'react'
import { Container } from '@material-ui/core'
import Lista from '../components/Lista'

function OrderPage(props) {
    return (
        <div>
            <React.Fragment>
                <Container maxWidth="sm">
                    <br></br>
                    <br></br>
                    <br></br>
                    <Lista id={props.match.params.id}></Lista>
                </Container>
            </React.Fragment>
        </div>
    )
}

export default OrderPage
