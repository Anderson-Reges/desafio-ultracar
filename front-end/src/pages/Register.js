import React, { useContext } from "react";
import Header from "../components/Header";
import MyContext from "../context/Context";
import QrcodeReader from "../components/QrcodeReader";
import RegisterUser from '../components/RegisterUser';

export default function Register() {
  const {
    renderReadQR, setRenderReadQR, registerNewUser, setRegisterNewUser,
  } = useContext(MyContext);

  const setRender = ({ target }) => {
    switch (target.value) {
      case 'Ler QRcode':
        setRenderReadQR(true);
        setRegisterNewUser(false)
        break;
      case 'Cadastrar Novo Cliente':
        setRenderReadQR(false);
        setRegisterNewUser(true)
        break;
      default:
        break;
    }
  }

  return (
    <div>
      <Header />
      <div>
        <input
          type="button"
          value="Ler QRcode"
          onClick={setRender}
        />
        <input
          type="button"
          value="Cadastrar Novo Cliente"
          onClick={setRender}
        />
        {
          renderReadQR && <QrcodeReader />
        }
        {registerNewUser && <RegisterUser />}
      </div>
    </div>
  )
}