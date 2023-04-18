import React, { useContext, useEffect, useState } from 'react';
import { QrReader } from 'react-qr-reader';
import MyContext from '../context/Context';
import { useNavigate } from 'react-router-dom'

const QrcodeReader = () => {
  const navigate = useNavigate();
  const [redirectBoolean, setRedirect] = useState(false);

  useEffect(() => {
    if (redirectBoolean) navigate('/cadastro/servico')
  }, [navigate, redirectBoolean])

  return (
    <>
      <QrReader
        onResult={(result, _error) => {
          if (!!result) {
            const mockQr = {
              id: 1,
              clientName: "Paulo Ramos da Silva",
              email: "paulo@test.com",
              phone: "xxxxxxxxxx",
              vehicleBrand: "Peugeot",
              vehicleModel: "Peugeot 206",
              vehicleYear: "2006"
            }
            localStorage.setItem('qrUser', JSON.stringify(mockQr))
            setRedirect(true);
          }
        }}
        style={{ width: '100%' }}
      />
    </>
  );
};

export default QrcodeReader;
