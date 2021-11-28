import React, { useState, useEffect } from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import Navbar from 'react-bootstrap/Navbar';
import { Nav }  from 'react-bootstrap';
import '../styles/Home.css';
import ProductList from './ProductList';
import Checkout from './Checkout';

// Main components

const Home = () => {

	let [products, setProducts] = useState([]);
	let [cart, setCart] = useState([]);
	let [filtered, setFiltered] = useState([]);
	let [total, setTotal] = useState(0);


	useEffect(() => {
		getStarships();	
	}, []);
	

	useEffect(() => {
		// addTotals();
		// console.log(total);
	}, [cart, total])
	
	//  const getStarships =  () => {
	// 		fetch('https://swapi.dev/api/starships')
	// 		.then(response => response.json())
	// 		.then(data => {

	// 			let products = data.results;

	// 			products.forEach(product => {
	// 					product.inCart = false;
	// 					product.count = 0;
	// 					product.subtotal = 0;

	// 					if(product.cost_in_credits === "unknown"){
	// 						product.cost_in_credits = 99999;
	// 					}
	// 					product.cost_in_credits = parseFloat(product.cost_in_credits);
	// 			});

	// 			setProducts(products);

	// 		})
	// 		.catch(error => console.error(error)); 
	// }

	const getStarships =  () => {
		fetch('https://swapi.dev/api/starships')
		.then(response => response.json())
		.then(data => {

			let products = data.results;

			products.forEach(product => {
					product.inCart = false;
					product.count = 0;
					product.subtotal = 0;

					if(product.cost_in_credits === "unknown"){
						product.cost_in_credits = 99999;
					}
					product.cost_in_credits = parseFloat(product.cost_in_credits);
			});

			setProducts(products);

		})
		.catch(error => console.error(error)); 
}


	const getItem = id => {

    const product = products.find(item => item.url === id);
    return product;

  };


	const addToCart = id => {
    let tempProducts = [...products];
    const index = tempProducts.indexOf(getItem(id));
    const product = tempProducts[index];
    product.inCart = true;
    product.count = 1;
		
		if(product.subtotal === "unknown") {
			product.subtotal = 99999;
		}
		const price = parseFloat(product.cost_in_credits);
		product.subtotal = price;

		setCart([...cart, product]);
		setProducts([...tempProducts]);
		addTotals();

  };

	const addTotals = () => {
		let total = 0;

		cart.forEach(item => {
			total += item.subtotal	
		});

		setTotal(total);

	}

  const incrementQuantity = id => {
		let tempCart = [...cart];
		const selectedProduct = tempCart.find(item => item.url === id)
		const index = tempCart.indexOf(selectedProduct);
		const product = tempCart[index];

		product.count = product.count + 1;

		if(product.cost_in_credits === "unknown") {
			product.cost_in_credits = 99999;
		}
		product.subtotal = parseFloat(product.count) * parseFloat(product.cost_in_credits);

		setCart([...tempCart]);
		addTotals();
		
  }

  const decrementQuantity = id => {
		let tempCart = [...cart];
		const selectedProduct = tempCart.find(item => item.url === id)
		const index = tempCart.indexOf(selectedProduct);
		const product = tempCart[index];

		product.count = product.count - 1;
		product.subtotal = parseFloat(product.count) * parseFloat(product.cost_in_credits);

		if(product.count === 0) {
			removeItem(id)
		} else {			
			setCart([...tempCart]);
			addTotals();
		}

  }

	const removeItem = id => {
		let tempProducts = [...products];
		let tempCart = [...cart];

		let filteredCart = tempCart.filter(item => item.url !== id);

		const index = tempProducts.indexOf(getItem(id));
		let productToRemove = tempProducts[index];
		productToRemove.inCart = false;
		productToRemove.count = 0;
		productToRemove.subtotal = 0;

		setCart([...filteredCart]);
		setProducts([...tempProducts]);
		addTotals();

	}


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
				<Route path="/" element={ <ProductList products={products}
																							 setProducts={setProducts} 
																							 addToCart={addToCart}  
																							 filtered={filtered} 
																							 setFiltered={setFiltered} />}/>
				
				<Route path="/checkout" element={<Checkout products={products}
																									 setProducts={setProducts}
																									 cart={cart} 
																									 incrementQuantity={incrementQuantity} 
																									 total={total} 
																									 decrementQuantity={decrementQuantity}
																									 addTotals={addTotals}
																									 addToCart={addToCart} 
																									 setCart={setCart}
																									 setTotal={setTotal} />}/>				
			</Routes>
				

    </div>
    )
}

export default Home;