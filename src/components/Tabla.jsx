import React, { Component } from 'react';
import axios from 'axios';
import { Table,TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, IconButton, Link } from '@material-ui/core';
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart';
import DescriptionIcon from '@material-ui/icons/Description';
import PaymentIcon from '@material-ui/icons/Payment';
import swal from 'sweetalert';

 
class Tabla extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      id: null
    };
    this.handleAlert = this.handleAlert.bind(this);
  }

  handleAlert() {
    swal("Pago Realizado!", "Proceso Exitoso!", "success");
  }
 
  componentDidMount() {
    axios.get("https://eshop-deve.herokuapp.com/api/v2/orders",{
      headers: {
        Authorization: "eyJhbGciOiJIUzUxMiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJwUGFINU55VXRxTUkzMDZtajdZVHdHV3JIZE81cWxmaCIsImlhdCI6MTYwNTY0NDA0NzA1OH0.skfIY_7CAANkxmhoq37OI4jYRE8flx1ENq1v1VaRevJiroYNFQYz7Oy6hL1YZ1OJkevXSQFuLMHTqY0w6d5nPQ"
      }
    }).then(resp => { 
      this.setState(
        {
          data: resp.data.orders
        });
    });
  }

  render(){
    const { data } = this.state;
    return(
        <TableContainer component={Paper}>
      <Table aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Number</TableCell>
            <TableCell align="right"># Orden</TableCell>
            <TableCell align="right">Currency</TableCell>
            <TableCell align="right">Total ($)</TableCell>
            <TableCell align="right"></TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data.map((orden) => (
            <TableRow>
              <TableCell>{ orden.number }</TableCell>
              <TableCell align="right">{ orden.name }</TableCell>
              <TableCell align="right">{ orden.currency }</TableCell>
              <TableCell align="right">{ orden.totals.total }</TableCell>
              <TableCell align="right">
                <Link color="inherit" href={/form/+orden.id}>
                  <IconButton color="primary" aria-label="Agregar">
                    <AddShoppingCartIcon />
                  </IconButton>
                </Link>
                <Link color="inherit" href={/description/+orden.id}>
                  <IconButton color="primary" aria-label="Descripcion">
                    <DescriptionIcon />
                  </IconButton>
                </Link>
                <IconButton color="primary" aria-label="Pagar" onClick={this.handleAlert}>
                  <PaymentIcon />
                </IconButton>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    )
  }
}
 
export default Tabla;