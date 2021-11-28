import React from 'react';
import { Table, Container, Row, Col } from 'react-bootstrap';
import '../styles/ProductList.css';
import Product from './Product';

// Display list of starships/Products

const ProductList = ({ products, addToCart, filterShips, filtered }) => {



    return (
        <div>
            <h2>Our Products</h2>

						<label for="classes">Filter by: </label>
						<select id="classes" onChange={(e) => filterShips(e.target.value)}>
							<option value="all">All</option>
							{products.map(product => {
									return (
										<option value={product.starship_class}>{product.starship_class}</option>					
									)
							})}
						</select>
						<br /> <br/>

							<Container>
								<Row xs={1} md={2}>
									<Col md={10}>								
										<Table striped bordered hover>
											<thead>
												<tr>
													<th>Make</th>
													<th>Model</th>
													<th>Price</th>
												</tr>
												</thead>
												<tbody><Product products={products} addToCart={addToCart} filtered={filtered} /></tbody>
										</Table>
									</Col>		
													
									</Row>
								</Container>
      
        </div>
    )
}

export default ProductList;
