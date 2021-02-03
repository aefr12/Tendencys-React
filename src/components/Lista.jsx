import React from 'react'
import axios from 'axios';
import { Table,TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from '@material-ui/core';
import { Component } from 'react';
class Lista extends Component {

    constructor(props) {
        super(props);
        this.state ={
            id: props.id,
            items: [],
            products: [],
            agregados: []
        }
      }

    componentDidMount(){
        axios.get("https://eshop-deve.herokuapp.com/api/v2/orders",{
            headers: {
                Authorization: "eyJhbGciOiJIUzUxMiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJwUGFINU55VXRxTUkzMDZtajdZVHdHV3JIZE81cWxmaCIsImlhdCI6MTYwNTY0NDA0NzA1OH0.skfIY_7CAANkxmhoq37OI4jYRE8flx1ENq1v1VaRevJiroYNFQYz7Oy6hL1YZ1OJkevXSQFuLMHTqY0w6d5nPQ"
            }
        }).then(resp => { 
            this.setState({ items: resp.data.orders });
            for (let i=0; i< this.state.items.length; i++) {
                if(this.state.items[i].id === this.state.id){
                    this.setState({
                        products: this.state.items[i].items,
                        agregados: localStorage.getItem('item')
                    });
                  }
            }
    });
    }

    render(){
        const {products,agregados} = this.state;
        console.log(agregados);
        return (
            <div>
            <TableContainer component={Paper}>
                <center>
                    <h2>LISTA DE PRODUCTOS DE LA ORDEN ({this.state.id})</h2>
                </center>
                <Table size="small" aria-label="a dense table">
                    <TableHead>
                    <TableRow>
                        <TableCell align="right">NAME</TableCell>
                        <TableCell align="right">SKU</TableCell>
                        <TableCell align="right">QUANTITY</TableCell>
                        <TableCell align="right">PRICE</TableCell>
                    </TableRow>
                    </TableHead>
                    <TableBody>
                        {products.map((prod) => (
                            <TableRow>
                                <TableCell align="right">{ prod.name }</TableCell>
                                <TableCell align="right">{ prod.sku }</TableCell>
                                <TableCell align="right">{ prod.quantity }</TableCell>
                                <TableCell align="right">{ prod.price }</TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
            </div>
        )
    }
}

export default Lista
