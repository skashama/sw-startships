import React from 'react';
import { Table } from 'react-bootstrap';
import { BsPlusSquare, BsDashSquare } from 'react-icons/bs';

//  display cart

const Checkout = ({ cart, setCart, incrementQuantity, total, decrementQuantity }) => {

  const btnStyle = {
    margin: '.4rem',
    fontSize: '20px'
  }

    return (
        <div className="product-list">
          <Table striped bordered hover>
                <thead>
                    <tr>
                    <th>Product</th>
                    <th>Price</th>
                    <th>Quantity</th>
										<th>Subtotal</th>
                    </tr>
                </thead>
                <tbody>
                  {cart.map(product => {
                          return (
                            <tr key={product.url}>
                              <td>{product.name}</td>
                              <td>									
                                { product.cost_in_credits === 'unknown' 
                                  ? 99999  
                                  : product.cost_in_credits }
                              </td>
                              <td><BsDashSquare style={btnStyle} onClick={() => decrementQuantity(product.url)}></BsDashSquare>
                                  {product.count}
                                  <BsPlusSquare style={btnStyle} onClick={() => incrementQuantity(product.url)}></BsPlusSquare></td>
                              <td>
                                { product.subtotal === 'unknown' 
                                  ? 99999  
                                  : product.subtotal }
                              </td>
                            </tr>
                          )
                    })}
                  <tr>
                    <td colSpan="2">
                      <label for="code">CODE:</label>
                      <input type="text" name="code" />
                      <button>Apply</button>
                    </td>
                    <td colSpan="2">Total: {total}</td>
                  </tr>
                </tbody>
          </Table>
        </div>
    )
}

export default Checkout
