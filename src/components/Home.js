import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import Navbar from 'react-bootstrap/Navbar';
import { Nav }  from 'react-bootstrap';
import '../styles/Home.css';
import ProductList from './ProductList';
import Checkout from './Checkout';

// Main components

const Home = () => {
    return (
        <div>
			
						<Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
							<>
								<Navbar.Brand>              
									<Nav.Link href="#">
										<Link to="/"><span className="nav-Item">SW Starships</span></Link>
									</Nav.Link>
								</Navbar.Brand>

								<Navbar.Toggle aria-controls="responsive-navbar-nav" />
								<Navbar.Collapse id="responsive-navbar-nav">
									<Nav className="mr-auto navbar-link">
										<Nav.Link href="#">
											<Link to="/"><span className="nav-Item">Products</span></Link>
										</Nav.Link>
									</Nav>

									<Nav className="navbar-link">
										<Nav.Link href="#">
											<Link to="/checkout"><span className="nav-Item">Cart</span></Link>
										</Nav.Link>
									</Nav>
									</Navbar.Collapse>
								</>
						</Navbar>

					<Routes>
						<Route path="/" element={<ProductList />} />
						
						<Route path="/checkout" element={<Checkout />} />
						
					</Routes>
				

        </div>
    )
}

export default Home;