import React, { useContext, useEffect } from "react";
import formatDate from '../utils/formatDate'
import { Link } from "react-router-dom";
import MyContext from "../context/Context";

export default function ServiceCard({
  id, status, service, price, startedAt, finishedAt,
  clientId, responsibleId,
}) {
  const { client, responsible, getOneClient, getOneResponsible } = useContext(MyContext);
  const NEGATIVE_FOUR = -4;

  useEffect(() => {
    getOneClient(clientId)
    getOneResponsible(responsibleId)
  }, [])

  return (
    <Link
      to={`servico/${id}`}
    >
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
          {client.clientName}
        </h3>
        <h3>
          {responsible.name}
        </h3>
        <h3>
          R$
          {' '}
          {price}
        </h3>
        <h3>
          {formatDate(startedAt)}
        </h3>
        <h3>
          {formatDate(finishedAt)}
        </h3>
      </div>
    </Link>
  )
}