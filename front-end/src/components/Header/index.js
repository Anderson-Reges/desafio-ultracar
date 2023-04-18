import React from "react";
import { Link } from "react-router-dom";
import styles from './styles.module.scss';

export default function Header() {
  return (
    <div className={ styles.headerContainer }>
      <Link to='/'>
        Serviços
      </Link>
      <Link to='/cadastro'>
        Cadastro
      </Link>
    </div>
  )
}