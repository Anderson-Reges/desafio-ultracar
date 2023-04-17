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

  const getServices = async () => {
    await api('GET', 'services')
      .then(({ data }) => setAllServices(data))
      .catch(error => console.log(error));
  }

  const getClients = async () => {
    await api('GET', 'clients')
      .then(({ data }) => setClients(data))
      .catch(error => console.log(error));
  }

  const getResponsible = async () => {
    await api('GET', 'responsibles')
      .then(({ data }) => setResponsibles(data))
      .catch(error => console.log(error));
  }

  useEffect(() => {
    getClients();
    getResponsible();
    getServices();
  }, []);
  
  const contextValue = useMemo(() => ({
    allServices, setAllServices,
    clients, setClients,
    responsibles, setResponsibles,
    selectResponsible, setSelectResponsible,
    servicePerResponsible, setServicePerResponsible,
    getServices,
  }), [allServices, clients, responsibles, selectResponsible, servicePerResponsible]);

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