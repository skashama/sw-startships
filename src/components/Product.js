import React, { useState, useEffect } from 'react';
import { BsCheckLg, BsBag } from 'react-icons/bs';

// Display single starship/Product



const Product = () => {

	let [products, setProducts] = useState([]);


	useEffect(() => {
	
			getStarships();
	
	}, []);
	
	
	 const getStarships =  () => {
			fetch('https://swapi.dev/api/starships')
			.then(response => response.json())
			.then(data => {
				setProducts(data.results);
				// console.log(data.results); 
			})
			.catch(error => console.error(error)); 
	}

	const addProductToCart = (products) => {
		console.log(products);
	}

    return (
        <>
					{products.map(product => {
						return (
							<tr key={product.url}>
								<td>{product.name}</td>
								<td>{product.model}</td>
								<td>{product.cost_in_credits}</td>
								<td>
									<button onClick={addProductToCart}>Add to cart
										</button>
								</td>
								{/* <td><BsCheckLg /></td> */}
							</tr>
						)
					})}
        </>
    )
}

export default Product;
