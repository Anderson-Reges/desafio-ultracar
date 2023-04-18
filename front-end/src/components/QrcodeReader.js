import React, { useContext, useEffect, useState } from 'react';
import { QrReader } from 'react-qr-reader';
import MyContext from '../context/Context';
import { useNavigate } from 'react-router-dom'

const QrcodeReader = () => {
  const navigate = useNavigate();
  const { setClient } = useContext(MyContext);
  const [redirectBoolean, setRedirect] = useState(false);

  useEffect(() => {
    if (redirectBoolean) navigate('/cadastro/servico')
  }, [navigate, redirectBoolean])

  return (
    <>
      <QrReader
        onResult={(result, _error) => {
          if (!!result) {
            setClient({
              id: 1,
              clientName: "Paulo Ramos da Silva",
              CPF: "xxxxxxxxxxx",
              email: "paulo@test.com",
              phone: "xxxxxxxxxx",
              carBrand: "Peugeot",
              carModel: "Peugeot 206",
              carYear: "2006"
            });
            setRedirect(true);
          }
        }}
        style={{ width: '100%' }}
      />
    </>
  );
};

export default QrcodeReader;
