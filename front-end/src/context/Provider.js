import React, { useMemo, useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import MyContext from './Context';
import api from '../utils/fetch';

function ServiceProvider({ children }) {
  const [allServices, setAllServices] = useState([]);
  const [oneService, setOneService] = useState({});
  const [servicePerResponsible, setServicePerResponsible] = useState([]);
  const [clients, setClients] = useState([]);
  const [client, setClient] = useState({
    clientName: "",
    email: "",
    phone: "",
    vehicleBrand: "",
    vehicleModel: "",
    vehicleYear: ""
  });
  const [responsibles, setResponsibles] = useState([]);
  const [responsible, setResponsible] = useState({});
  const [selectResponsible, setSelectResponsible] = useState('Todos os Responsaveis');
  const [renderReadQR, setRenderReadQR] = useState(false);
  const [registerNewUser, setRegisterNewUser] = useState(false);
  const [products, setProducts] = useState([]);
  const [productsInCart, setProductsInCart] = useState([]);
  const [inputSearch, setInputSearch] = useState('');
  const [resultSearch, setResultSearch] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);
  const [description, setDescription] = useState('');

  const getServices = async () => {
    await api('GET', 'api/services')
      .then(({ data }) => setAllServices(data))
      .catch(error => console.log(error));
  }

  const getOneService = async (id) => {
    await api('GET', `api/services/${id}`)
      .then(({ data }) => setOneService(data))
      .catch(error => console.log(error));
  }

  const postServices = async (service) => {
    await api('POST', 'api/services', { ...service })
      .then(({ data }) => console.log(data))
      .catch(error => console.log(error));
  }

  const putService = async (id) => {
    await api('PUT', `api/services/${id}`)
      .then(({ data }) => setAllServices(data))
      .catch(error => console.log(error));
  }

  const getClients = async () => {
    await api('GET', 'api/clients')
      .then(({ data }) => setClients(data))
      .catch(error => console.log(error));
  }

  const getOneClient = async (id) => {
    await api('GET', `api/clients/${id}`)
      .then(({ data }) => setClient(data))
      .catch(error => console.log(error));
  }

  const postClient = async (client) => {
    await api('POST', 'api/clients', client)
      .catch(error => console.log(error));
  }

  const getResponsible = async () => {
    await api('GET', 'api/responsibles')
      .then(({ data }) => setResponsibles(data))
      .catch(error => console.log(error));
  }

  const getOneResponsible = async (id) => {
    await api('GET', `api/responsibles/${id}`)
      .then(({ data }) => setResponsible(data))
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
    description, setDescription,
    oneService, setOneService,
    responsible, setResponsible,
    postServices,
    getServices,
    putService,
    getOneService,
    getOneClient,
    postClient,
    getOneResponsible,
  }), [
    allServices, clients,
    registerNewUser, renderReadQR,
    responsibles, selectResponsible,
    servicePerResponsible, client,
    products, productsInCart,
    inputSearch, resultSearch,
    totalPrice, description,
    oneService, responsible
  ]);

  return (
    <MyContext.Provider value={contextValue}>
      {children}
    </MyContext.Provider>
  );
}

ServiceProvider.propTypes = {
  children: PropTypes.arrayOf(),

}.isRequired;
export default ServiceProvider;