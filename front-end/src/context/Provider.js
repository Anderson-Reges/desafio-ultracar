import React, { useMemo, useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import MyContext from './Context';
import api from '../utils/fetch';

function ServiceProvider({ children }) {
  const [allServices, setAllServices] = useState([]);
  const [servicePerResponsible, setServicePerResponsible] = useState([]);
  const [clients, setClients] = useState([]);
  const [responsibles, setResponsibles] = useState([]);
  const [selectResponsible, setSelectResponsible] = useState('Todos os Responsaveis');
  const [renderReadQR, setRenderReadQR] = useState(false);
  const [registerNewUser, setRegisterNewUser] = useState(false);
  const [client, setClient] = useState({});
  const [products, setProducts] = useState([]);
  const [productsInCart, setProductsInCart] = useState([]);
  const [inputSearch, setInputSearch] = useState('');
  const [resultSearch, setResultSearch] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0)

  const getServices = async () => {
    await api('GET', 'api/services')
      .then(({ data }) => setAllServices(data))
      .catch(error => console.log(error));
  }

  const postServices = async (service) => {
    await api('POST', 'api/services', {...service})
      .then(({ data }) => console.log(data))
      .catch(error => console.log(error));
  }

  const getClients = async () => {
    await api('GET', 'api/clients')
      .then(({ data }) => setClients(data))
      .catch(error => console.log(error));
  }

  const getResponsible = async () => {
    await api('GET', 'api/responsibles')
      .then(({ data }) => setResponsibles(data))
      .catch(error => console.log(error));
  }

  const getProducts = async () => {
    await api('GET', 'api/products')
      .then(({ data }) => setProducts(data))
      .catch(error => console.log(error));
  }

  useEffect(() => {
    getClients();
    getResponsible();
    getServices();
    getProducts();
  }, []);
  
  const contextValue = useMemo(() => ({
    allServices, setAllServices,
    clients, setClients,
    responsibles, setResponsibles,
    selectResponsible, setSelectResponsible,
    servicePerResponsible, setServicePerResponsible,
    renderReadQR, setRenderReadQR,
    registerNewUser, setRegisterNewUser,
    client, setClient,
    products,
    productsInCart, setProductsInCart,
    inputSearch, setInputSearch,
    resultSearch, setResultSearch,
    totalPrice, setTotalPrice,
    postServices,
    getServices,
  }), [
    allServices, clients,
    registerNewUser, renderReadQR,
    responsibles, selectResponsible,
    servicePerResponsible, client,
    products, productsInCart,
    inputSearch, resultSearch,
    totalPrice,
  ]);

  return (
    <MyContext.Provider value={ contextValue }>
      {children}
    </MyContext.Provider>
  );
}

ServiceProvider.propTypes = {
  children: PropTypes.arrayOf(),

}.isRequired;
export default ServiceProvider;