import React, { useContext, useEffect, useState } from 'react';
import MyContext from '../context/Context';

export default function OrderTable({ service }) {
  const { products, getOneClient, getOneResponsible } = useContext(MyContext);
  const [productService, setProductsService] = useState([]);

  useEffect(() => {
    if (service.productsIds) {
      const productsList = service.productsIds.map((id) => {
        return products.filter((product) => product.id === id)[0]
      })
      setProductsService(productsList)
    }
    getOneClient(service.clientId)
    getOneResponsible(service.responsibleId)
  }, [
    products, service.id,
    service.productsIds, service.clientId,
    service.responsibleId
  ])

  return (
    <table>
      <thead>
        <tr>
          <th>Item</th>
          <th>nome</th>
          <th>preço</th>
        </tr>
      </thead>
      <tbody>
        {service && productService.map((product, index) => (
          <tr key={index}>
            <td>
              {index + 1}
            </td>
            <td>
              {product.name}
            </td>
            <td>
              R$
              {product.price}
            </td>
          </tr>
        ))}
      </tbody>
      <h2>
        Total: R$
        {service.price}
      </h2>
    </table>
  );
}