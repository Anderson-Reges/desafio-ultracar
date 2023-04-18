import React, { useContext, useEffect } from 'react';
import MyContext from '../context/Context';

export default function OrderTable({ order, totalPrice }) {
  const { setProductsInCart } = useContext(MyContext)

  const removeProduct = (productId) => {
    const remove = order.filter(({ id }) => id !== productId);
    setProductsInCart(remove)
  }

  useEffect(() => {
    
  }, [order, totalPrice])

  return (
    <table>
      <thead>
        <tr>
          <th>Item</th>
          <th>nome</th>
          <th>preço</th>
          <th>remover</th>
        </tr>
      </thead>
      <tbody>
        {order && order.map((product, index) => (
          <tr key={ index }>
            <td>
              {index + 1}
            </td>
            <td>
              {product.name}
            </td>
            <td>
              {product.price}
            </td>
            <td>
              <input
                type='button'
                value="Remover"
                onClick={ () => removeProduct(product.id) }
              />
            </td>
          </tr>
        ))}
      </tbody>
      <h2>
        Total: R$
        {totalPrice}
      </h2>
    </table>
  );
}