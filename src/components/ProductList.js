import React, { useState } from 'react';
import { Table, Container, Row, Col } from 'react-bootstrap';
import '../styles/ProductList.css';
import Product from './Product';

// Display list of starships/Products

const ProductList = ({ products, setProducts, addToCart, filterShips }) => {

	let [filtered, setFiltered] = useState();


    return (
        <div>
            <h2>Our Products</h2>

							<Container className="products-container">
								<Row xs={1} md={2}>
									<Col md={2}>
									<div className="filter_ui">
									<label for="classes">Filter by: </label>
									<select id="classes" className="classes_ui" onChange={(e) => setFiltered(e.target.value) }>
										<option value="">All</option>
										{products.map(product => {
												return (
													<option value={product.starship_class}>{product.starship_class}</option>					
												)
										})}
									</select>
									<br /> <br/>
									</div>
									</Col>
									<Col md={10} className="table_col">								
										<Table striped bordered hover>
											<thead>
												<tr>
													<th>Make</th>
													<th>Model</th>
													<th>Price</th>
												</tr>
												</thead>
												<tbody><Product products={products} addToCart={addToCart} filtered={filtered} setFiltered={setFiltered} /></tbody>
										</Table>
									</Col>		
													
									</Row>
								</Container>
      
        </div>
    )
}

export default ProductList;
