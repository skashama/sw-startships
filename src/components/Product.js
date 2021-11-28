import React from 'react';

// Display single starship/Product

const Product = ({ products, addToCart }) => {

	
	return (
		<>
			{products.map(product => {
						return (
							<tr key={product.url}>
								<td>{product.name}</td>
								<td>{product.model}</td>
								<td>									
									{ product.cost_in_credits === 'unknown' 
										? 99999  
										: product.cost_in_credits }
								</td>
								<td>
									<button onClick={() => {
											addToCart(product.url) }} 
											disabled={ product.inCart ? true : false}
									>
										{product.inCart ? 'Added to Cart' : 'Add to cart'}
										</button>
								</td>
							</tr>
						)
			})}
    </>
    )
}

export default Product;
