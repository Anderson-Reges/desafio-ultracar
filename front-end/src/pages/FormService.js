import React, { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import MyContext from "../context/Context";
import Header from "../components/Header";
import ProductCard from '../components/ProductCard';
import OrderTable from "../components/OrderTable";
import ClientInfo from "../components/ClienteInfo";

export default function FormService() {
  const {
    client, selectResponsible, setSelectResponsible, responsibles,
    products, setClient, productsInCart, setProductsInCart,
    inputSearch, setInputSearch, resultSearch, setResultSearch,
    totalPrice, setTotalPrice, postServices, allServices, description, setDescription,
  } = useContext(MyContext);
  const navigate = useNavigate();

  const createService = (event) => {
    event.preventDefault();
    const date = new Date();
    const onlyIds = productsInCart.map(({ id }) => id );
    const body = {
      id: allServices.length + 1,
      clientId: client.id,
      responsibleId: Number(selectResponsible),
      status: "Em progresso",
      serviceDescription: description,
      productsIds: onlyIds,
      price: totalPrice,
      startedAt: date,
      finishedAt: null,
    }
    postServices(body)
    setSelectResponsible('Todos os Responsaveis')
    navigate('/')
  }

  useEffect(() => {
    const total = productsInCart
      .reduce((acc, curr) => acc + curr.price, 0);
    setTotalPrice(total);

    const filterProduct = products.filter((product) => (
      product.name.toLowerCase().includes(inputSearch.toLowerCase()) ? product : false
    ));
    setResultSearch(filterProduct)

    if (localStorage.getItem('qrUser')) {
      const qrUser = JSON.parse(localStorage.getItem('qrUser'))
      setClient(qrUser)
    }
    if (inputSearch.length === 0) {
      return setResultSearch([])
    }
  }, [inputSearch, products, productsInCart, setSelectResponsible])

  return (
    <main>
      <Header />
      <form onSubmit={ createService }>
        <ClientInfo />
        <label htmlFor="Pessoa Responsavel">
          Pessoa Responsavel:
          <select
            name="Pessoa Responsavel"
            id="Pessoa Responsavel"
            value={selectResponsible}
            onChange={({ target }) => setSelectResponsible(target.value)}
          >
            <option>--escolha o responsavel--</option>
            {responsibles && responsibles.map((responsible, index) => (
              <option
                key={index}
                value={responsible.id}
              >
                {responsible.name}
              </option>
            ))}
          </select>
        </label>
        <label htmlFor="Produtos">
          Pesquise produtos:
          <input
            type="text"
            value={inputSearch}
            onChange={({ target }) => setInputSearch(target.value)}
          />
        </label>
        <label htmlFor="serviço">
          Serviço:
          <input
            type="text"
            name="service"
            value={description}
            onChange={({ target }) => setDescription(target.value)}
          />
        </label>
        <input
          type="submit"
          value="Cadastrar Serviço"
        />
        {resultSearch && resultSearch.map((product, index) => (
          <ProductCard
            key={index}
            id={ product.id }
            name={product.name}
            price={product.price}
            setProductInCart={ setProductsInCart }
          />
        ))}
      </form>
      <OrderTable 
        order={ productsInCart }
        totalPrice={ totalPrice }
      />
    </main>
  )
}