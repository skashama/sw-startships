import React, { useState } from 'react';
import { Table, Container, Row, Col } from 'react-bootstrap';
import '../styles/ProductList.css';
import Product from './Product';

// Display list of starships/Products

const ProductList = ({ products, addToCart }) => {

	let [filtered, setFiltered] = useState();

	const uniqueClasses = [...new Set(products.map(product => product.starship_class))]


    return (
        <div className="store_container">
            <h2>Our Products</h2>
						<br/>
							<Container className="products_container">
								<Row xs={1} md={2}>
									<Col md={2}>
									<div className="filter_ui">
									<label for="classes">Filter by: </label>
									<select id="classes" className="classes_ui" onChange={(e) => setFiltered(e.target.value) }>
										<option value="">All</option>
										{uniqueClasses.map(shipClass => {
												return (
													<option value={shipClass}>{shipClass}</option>					
												)
										})}
									</select>
									<br /> <br/>
									</div>
									</Col>
									<Col md={10} className="table_col">								
										<Table striped bordered hover responsive="sm">
											<thead>
												<tr>
													<th>Make</th>
													<th>Model</th>
													<th>Price</th>
												</tr>
												</thead>
												<tbody><Product products={products} 
																addToCart={addToCart} 
																filtered={filtered} 
												/></tbody>
										</Table>
									</Col>		
													
									</Row>
								</Container>
      
        </div>
    )
}

export default ProductList;
