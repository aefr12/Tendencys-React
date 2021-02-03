import React, { Component } from 'react'
import {TextField,TableContainer,Paper, Button} from '@material-ui/core'
import SaveIcon from '@material-ui/icons/Save';
import swal from 'sweetalert';

class Formulario extends Component {
  constructor(props) {
    super(props);
    localStorage.setItem('id', JSON.stringify(this.props.id));
  }

  handleName(e){
    e.preventDefault();
    window.localStorage.setItem('name', JSON.stringify(e.target.value));
  }
  handleSku(e){
    e.preventDefault();
    window.localStorage.setItem('sku', JSON.stringify(e.target.value));
  }
  handleQuantity(e){
    e.preventDefault();
    window.localStorage.setItem('quantity', JSON.stringify(e.target.value));
  }
  handlePrice(e){
    e.preventDefault();
    window.localStorage.setItem('price', JSON.stringify(e.target.value));
  }

  handleSubmit(e){
    swal("Producto Agregado!", "Proceso Exitoso!", "success");
    const items = {
      'id': localStorage.getItem('id'),
      'name': localStorage.getItem('name'),
      'sku': localStorage.getItem('sku'),
      'quantity': localStorage.getItem('quantity'),
      'price': localStorage.getItem('price')
    };
    localStorage.setItem('item',items);
  }



  render(){
    return (
      <TableContainer component={Paper}>
            <center>
              <h4>NAME</h4>
              <TextField label="Name" variant="filled" onChange={this.handleName}/>
              <h4>SKU</h4>
              <TextField label="Sku" variant="filled" onChange={this.handleSku}/>
              <h4>QUANTITY</h4>
              <TextField label="Quantity" variant="filled" onChange={this.handleQuantity}/>
              <h4>PRICE</h4>
              <TextField label="Price" variant="filled" onChange={this.handlePrice}/>
              <br></br><br></br><br></br>
              <Button type="submit" variant="contained" color="primary" size="large" startIcon={<SaveIcon />} onClick={this.handleSubmit}>
                Guardar
              </Button>
            </center>
      </TableContainer>
    )
  }
}

export default Formulario
