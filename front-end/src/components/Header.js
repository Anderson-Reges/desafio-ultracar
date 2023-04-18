import React from "react";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <div>
      <Link to='/'>
        Serviços
      </Link>
      <Link to='/cadastro'>
        Cadastro
      </Link>
    </div>
  )
}