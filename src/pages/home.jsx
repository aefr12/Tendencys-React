import React from 'react'
import Container from '@material-ui/core/Container';
import Tabla from '../components/Tabla'

function HomePage() {
    return (
        <div>
            <React.Fragment>
                <Container maxWidth="sm">
                    <br></br>
                    <br></br>
                    <br></br>
                    <Tabla></Tabla>
                </Container>
            </React.Fragment>
        </div>
    )
}

export default HomePage
