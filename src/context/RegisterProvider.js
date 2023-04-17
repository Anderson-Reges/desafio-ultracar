import React, { useMemo, useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import MyContext from './Context';
import api from '../utils/fetch';

function RegisterProvider({ children }) {
  
  const contextValue = useMemo(() => ({
  }), []);

  return (
    <MyContext.Provider value={ contextValue }>
      {children}
    </MyContext.Provider>
  );
}

RegisterProvider.propTypes = {
  children: PropTypes.arrayOf(),

}.isRequired;
export default RegisterProvider;