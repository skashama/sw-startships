import React from 'react';
import { Table } from 'react-bootstrap';
import '../styles/ProductList.css';
import Product from './Product';

// Display list of starships/Products

const ProductList = () => {
    return (
        <div>
            <h2>Our Products</h2>
						
							<div className="product-list">						
								<Table striped bordered hover>
									<thead>
										<tr>
											<th>Make</th>
											<th>Model</th>
											<th>Price</th>
										</tr>
										</thead>
										<tbody>
											<Product />
										</tbody>
								</Table>
						</div>
      
        </div>
    )
}

export default ProductList;
