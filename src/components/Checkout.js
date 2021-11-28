import React, { useState, useEffect } from 'react';
import { Table } from 'react-bootstrap';
import { BsPlusSquare, BsDashSquare } from 'react-icons/bs';

//  display cart

const Checkout = ({ cart, incrementQuantity, total, setTotal, decrementQuantity, addTotals }) => {

  const btnStyle = {
    margin: '.4rem',
    fontSize: '20px'
  }

  
  let [code, setCode] = useState("");
  
  useEffect(() => {
    // applyDiscount();
    addTotals();
    // applyDiscount();
  }, [])

  const handleSubmit = (e) => {
    e.preventDefault();

    if(code.toLowerCase() === 'palpatine') {
        applyDiscount();
    }
    // console.log(code);
    setCode('');
   
  }

  const applyDiscount = () => {
    
    let discount = 0.066;
    let price = total;
    let discounted = discount*price;
    total = price - discounted;
    
    setTotal(total);

    // console.log(priceToPay);
    console.log(total);
  }


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
                  {cart.map(product => {
                          return (
                            <tr key={product.url}>
                              <td>{product.name}</td>
                              <td>									
                                { product.cost_in_credits === 'unknown' 
                                  ? 99999  
                                  : product.cost_in_credits }
                              </td>
                              <td><BsDashSquare style={btnStyle} onClick={() => decrementQuantity(product.url)}></BsDashSquare>
                                  {product.count}
                                  <BsPlusSquare style={btnStyle} onClick={() => incrementQuantity(product.url)}></BsPlusSquare></td>
                              <td>
                                { product.subtotal === 'unknown' 
                                  ? 99999  
                                  : product.subtotal }
                              </td>
                            </tr>
                          )
                    })}
                  <tr>
                    <td colSpan="2">
                      <form onSubmit={handleSubmit}>
                        <label>CODE:</label>
                        <input type="text" name="code" value={code} onChange={(e) => setCode(e.target.value)}  />
                        <button type="submit">Apply</button>
                      </form>
                    </td>
                    <td colSpan="2"> <b>Total :</b> {total}</td>
                  </tr>
                </tbody>
          </Table>
        </div>
    )
}

export default Checkout
