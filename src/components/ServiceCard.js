import React from "react";

export default function ServiceCard({
  id, status, service, getNameClient, getNameResponsible, price, startedAt, finishedAt,
  clientId, responsibleId,
}) {
  const NEGATIVE_FOUR = -4;
  return (
    <div>
      <h3>
        <p>Serviço</p>
        {(`0000${id}`).slice(NEGATIVE_FOUR)}
      </h3>
      <h3>
        {status}
      </h3>
      <h3>
        {service}
      </h3>
      <h3>
        {getNameClient(clientId)}
      </h3>
      <h3>
        {getNameResponsible(responsibleId)}
      </h3>
      <h3>
        R$
        {' '}
        {price}
      </h3>
      <h3>
        {startedAt}
      </h3>
      <h3>
        {finishedAt}
      </h3>
    </div>
  )
}