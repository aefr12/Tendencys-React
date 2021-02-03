import React from 'react'
import Container from '@material-ui/core/Container'
import Formulario from '../components/Formulario'

function FormPage(props) {
    return (
        <div>
            <React.Fragment>
                <Container maxWidth="sm">
                    <br></br>
                    <br></br>
                    <br></br>
                    <Formulario id={props.match.params.id}></Formulario>
                </Container>
            </React.Fragment>
        </div>
    )
}

export default FormPage
