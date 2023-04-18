import React from "react";

export default function ProductCard({ id, name, price, setProductInCart}) {

  const addCart = () => {
    setProductInCart((prevState) => [
      ...prevState, { id, name, price }
    ])
  } 

  return (
    <div>
      <h3>{name}</h3>
      <h3>R${price}</h3>
      <input 
        type="button"
        value="Adicionar"
        onClick={ addCart }
      />
    </div>
  )
}