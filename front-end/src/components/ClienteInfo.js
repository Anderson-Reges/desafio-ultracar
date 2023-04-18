import React, { useContext } from "react";
import MyContext from "../context/Context";

export default function ClientInfo() {

  const { setClient, client } = useContext(MyContext)

  const handleChangeClient = ({ target }) => {
    const { value, name } = target
    setClient((prevState) => ({
      ...prevState, [name]: value
    }))
  }

  return (
    <div>
      <label htmlFor="ClientName">
          Cliente:
          <input
            type="text"
            name="clientName"
            onChange={handleChangeClient}
            value={client.clientName}
          />
        </label>
        <label htmlFor="email">
          Email:
          <input
            type="text"
            name="email"
            onChange={handleChangeClient}
            value={client.email}
          />
        </label>
        <label htmlFor="phone">
          Phone:
          <input
            type="text"
            name="phone"
            onChange={handleChangeClient}
            value={client.phone}
          />
        </label>
        <label htmlFor="vehicleBrand">
          Marca do veiculo:
          <input
            type="text"
            name="vehicleBrand"
            onChange={handleChangeClient}
            value={client.vehicleBrand}
          />
        </label>
        <label htmlFor="vehicleModel">
          Modelo do veiculo:
          <input
            type="text"
            name="vehicleModel"
            onChange={handleChangeClient}
            value={client.vehicleModel}
          />
        </label>
        <label htmlFor="vehicleYear">
          Ano do veiculo:
          <input
            type="text"
            name="vehicleYear"
            onChange={handleChangeClient}
            value={client.vehicleYear}
          />
        </label>
    </div>
  )
}