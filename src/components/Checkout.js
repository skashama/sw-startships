import React from 'react';
import { Table } from 'react-bootstrap';

//  display cart

const Checkout = () => {
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
									<tr>
										<td>Mark</td>
										<td>Otto</td>
										<td>@mdo</td>
										<td>@mdo</td>
									</tr>
									<tr>
										<td colSpan="2">Larry the Bird</td>
										<td colspan="2">Total :</td>
									</tr>
                </tbody>
          </Table>
        </div>
    )
}

export default Checkout
