import React from 'react';

// Display single starship/Product

const Product = ({ products, addToCart, filtered }) => {

	
	return (
		<>
			{products
					.filter(product => !filtered || product.starship_class === filtered)
					.map(product => {
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
									<button className="cart_button" onClick={() => {
											addToCart(product.url) }} 
											disabled={ product.inCart ? true : false}>
										{product.inCart ? 'Added to Cart' : 'Add to Cart'}
									</button> 
								</td>
							</tr>
						)
			})}
    </>
    )
}

export default Product;
