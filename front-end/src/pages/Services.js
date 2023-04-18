import React, { useContext, useEffect } from "react";
import Header from "../components/Header";
import MyContext from '../context/Context'
import ServiceCard from "../components/ServiceCard";

export default function Services() {
  const {
    allServices, setAllServices, responsibles, selectResponsible, setSelectResponsible,
    servicePerResponsible, setServicePerResponsible, getServices,
  } = useContext(MyContext);

  useEffect(() => {
    if (selectResponsible !== 'Todos os Responsaveis') {
      const service = allServices.filter((e) => e.responsibleId === Number(selectResponsible))
      setServicePerResponsible(service)
    }
    getServices();
  }, [selectResponsible, setAllServices, setServicePerResponsible])

  return (
    <div>
      <Header />
      <main>
        <label htmlFor="Pessoa Responsavel">
          Pessoa Responsavel:
          <select
            name="Pessoa Responsavel"
            id="Pessoa Responsavel"
            value={selectResponsible}
            onChange={({ target }) => setSelectResponsible(target.value)}
          >
            <option value='Todos os Responsaveis'>Todos os Responsaveis</option>
            {responsibles && responsibles.map(({ name, id }) => (
              <option
                key={id}
                value={id}
              >
                {name}
              </option>
            ))}
          </select>
        </label>
        {selectResponsible !== 'Todos os Responsaveis'
          ? (servicePerResponsible && servicePerResponsible.map((service) => (
            <ServiceCard
              key={service.id}
              id={service.id}
              status={service.status}
              price={service.price}
              startedAt={service.startedAt}
              finishedAt={service.finishedAt}
              clientId={ service.clientId }
              responsibleId={ service.responsibleId }
            />
          ))
          )
          : (allServices && allServices.map((service) => (
            <ServiceCard
              key={service.id}
              id={service.id}
              status={service.status}
              price={service.price}
              startedAt={service.startedAt}
              finishedAt={service.finishedAt}
              clientId={ service.clientId }
              responsibleId={ service.responsibleId }
            />
          )))}
      </main>
    </div>
  )
}