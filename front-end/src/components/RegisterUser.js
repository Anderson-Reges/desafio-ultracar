import React, { useContext, useState } from "react";
import MyContext from "../context/Context";

export default function RegisterUser() {
  const { postClient, clients } = useContext(MyContext);
  const [newClient, setNewClient] = useState({
    clientName: "",
    CPF: "",
    email: "",
    phone: "",
    vehicleBrand: "",
    vehicleModel: "",
    vehicleYear: ""
  })

  const handleChange = ({ target }) => {
    const { name, value } = target
    setNewClient((prevState) => ({
      ...prevState, [name]:value
    }))
  }

  const registerNewClient = (event) => {
    event.preventDefault()
    postClient({  id: clients.length + 1, ...newClient})
  }

  return (
    <form onSubmit={ registerNewClient } >
      <label htmlFor="clientName">
        Nome do Cliente:
        <input
          type="text"
          onChange={ handleChange }
          name="clientName"
          id="clientName"
          value={ newClient.clientName }
        />
      </label>
      <label htmlFor="CPF">
        CPF:
        <input
          type="text"
          onChange={ handleChange }
          name="CPF"
          id="CPF"
          value={ newClient.CPF}
        />
      </label>
      <label htmlFor="email">
      email:
        <input
          type="text"
          onChange={ handleChange }
          name="email"
          id="email"
          value={ newClient.email }
        />
      </label>
      <label htmlFor="phone">
        Numero de Contato:
        <input
          type="text"
          onChange={ handleChange }
          name="phone"
          id="phone"
          value={ newClient.phone }
        />
      </label>
      <label htmlFor="vehicleBrand">
        Marca do Veiculo:
        <input
          type="text"
          onChange={ handleChange }
          name="vehicleBrand"
          id="vehicleBrand"
          value={ newClient.vehicleBrand }
        />
      </label>
      <label htmlFor="vehicleModel">
        Modelo do veiculo:
        <input
          type="text"
          onChange={ handleChange }
          name="vehicleModel"
          id="vehicleModel"
          value={ newClient.vehicleModel }
        />
      </label>
      <label htmlFor="vehicleYear">
        Ano do Veiculo:
        <input
          type="text"
          onChange={ handleChange }
          name="vehicleYear"
          id="vehicleYear"
          value={ newClient.vehicleYear }
        />
      </label>
      <input 
        type="submit"
        value="Cadastrar cliente"
      />
    </form>
  )
};