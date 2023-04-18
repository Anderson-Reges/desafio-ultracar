const formatDate = (notFormatedDate) => {
  const date = new Date(notFormatedDate);
  const horas = date.getHours().toString().padStart(2, '0');
  const minutos = date.getMinutes().toString().padStart(2, '0');
  const segundos = date.getSeconds().toString().padStart(2, '0');
  const horaFormatada = `${horas}:${minutos}:${segundos}`;

  const dia = date.getDate().toString().padStart(2, '0');
  const mes = (date.getMonth() + 1).toString().padStart(2, '0');
  const ano = date.getFullYear().toString();
  const dataFormatada = `${dia}/${mes}/${ano}`;

  return `${dataFormatada} ${horaFormatada}`
}

export default formatDate;