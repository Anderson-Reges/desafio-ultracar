import React, { useContext, useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import Header from "../../components/Header";
import MyContext from "../../context/Context";
import ServiceTable from '../../components/ServiceTable';
import styles from './styles.module.scss';

export default function ServiceDetails() {
  const {
    getOneService, oneService, getOneClient, client, getOneResponsible,
    responsible, putService
  } = useContext(MyContext);
  const [disabled, setDisabled] = useState(true);
  const navigate = useNavigate()
  const { id } = useParams();
  const NEGATIVE_FOUR = -4;

  const addStatus = () => {
    putService(id)
    navigate('/')
  }

  useEffect(() => {
    getOneService(id)
    getOneClient(oneService.clientId)
    getOneResponsible(oneService.responsibleId)
    switch (oneService.status) {
      case 'Finalizado':
        setDisabled(true)
        break;
      case 'Em Progresso':
        setDisabled(false)
        break
      default:
        break;
    }
  }, [id, oneService.clientId, oneService.responsibleId, oneService.status])

  return (
    <div>
      <Header />
      <div className={ styles.pageContainer }>
        <div className={ styles.info }>
          <div className={ styles.firstColumn }>
            <h3>
              <p>Serviço</p>
              {(`0000${id}`).slice(NEGATIVE_FOUR)}
            </h3>
            <h3>
              <p>Nome do Cliente:</p>
              {client.clientName}
            </h3>
            <h3>
              <p>Marca do veiculo:</p>
              {client.vehicleBrand}
            </h3>
            <h3>
              <p>Modelo do veiculo:</p>
              {client.vehicleModel}
            </h3>
          </div>
          <div className={ styles.secondColumn }>
            <h3>
              <p>Ano do veiculo:</p>
              {client.vehicleYear}
            </h3>
            <h3>
              <p>Nome do Responsavel:</p>
              {responsible.name}
            </h3>
            <h3>
              <p>Status:</p>
              {oneService.status}
            </h3>
            <h3>
              <p>Descrição do serviço:</p>
              {oneService.serviceDescription}
            </h3>
          </div>
        </div>
        <div className={ styles.tableProducts }>
          <p>Peças:</p>
          <ServiceTable
            service={oneService}
          />
        </div>
        <input
          type='button'
          disabled={disabled}
          value="Finalizar Serviço"
          onClick={addStatus}
        />
      </div>
    </div>
  )
}