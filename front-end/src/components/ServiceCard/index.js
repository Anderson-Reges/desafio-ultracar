import React, { useContext, useEffect, useState } from "react";
import formatDate from '../../utils/formatDate'
import { Link } from "react-router-dom";
import MyContext from "../../context/Context";
import styles from './styles.module.scss';

export default function ServiceCard({
  id, status, price, startedAt, finishedAt,
  clientId, responsibleId,
}) {
  const { client, responsible, getOneClient, getOneResponsible } = useContext(MyContext);
  const NEGATIVE_FOUR = -4;
  const [backgroundStatus, setBackgroundStatus] = useState('');

  useEffect(() => {
    getOneClient(clientId);
    getOneResponsible(responsibleId);
    if (status === 'Em Progresso') {
      setBackgroundStatus(styles.progress);
    } else {
      setBackgroundStatus(styles.finished);
    }
  }, [status])

  return (
    <Link
      to={`servico/${id}`}
      id={styles.linkCard}
    >
      <div>
        <div className={styles.headerCard}>
          <h3>
            <p>Serviço</p>
            {(`0000${id}`).slice(NEGATIVE_FOUR)}
          </h3>
          <h3>
            R$
            {' '}
            {price}
          </h3>
        </div>
        <div className={styles.secondColumnCard}>
          <h3 className={ `${styles.status} ${backgroundStatus}` }>
            {status}
          </h3>
          <div className={styles.cardInfo}>
            <div className={styles.cardNames}>
              <label>
                Cliente:
                <h3>
                  {client.clientName}
                </h3>
              </label>
              <label>
                Responsavel:
                <h3>
                  {responsible.name}
                </h3>
              </label>
            </div>
            <div className={styles.cardDates}>
              <label>
                Inicio do serviço:
                <h3>
                  {formatDate(startedAt)}
                </h3>
              </label>
              <label>
                Término do serviço:
                <h3>
                  {formatDate(finishedAt)}
                </h3>
              </label>
            </div>
          </div>
        </div>
      </div>
    </Link>
  )
}