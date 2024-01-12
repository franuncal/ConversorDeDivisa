//Solicitar datos de usuario
function datosUsuario() {
  const cantidad = parseFloat(prompt("Ingrese la cantidad a convertir: "));
  const monedaOrigen = prompt(
    "Ingrese la moneda de ORIGEN (USD, EUR, JPY o ARS)"
  ).toUpperCase();//Tome como valida las minusculas-mayusculas
  const monedaDestino = prompt(
    "Ingrese la moneda de DESTINO (USD, EUR, JPY o ARS)"
  ).toUpperCase();//Tome como valida las minusculas-mayusculas

  return {
    cantidad: cantidad,
    monedaOrigen: monedaOrigen,
    monedaDestino: monedaDestino,
  };
}

//Funcion para convertir moneda
function convertirMoneda(datosUsuario) {
  const cantidad = datosUsuario.cantidad;
  const monedaOrigen = datosUsuario.monedaOrigen;
  const monedaDestino = datosUsuario.monedaDestino;

  // Validar con while cantidad
  while (isNaN(cantidad)) {
    alert("La cantidad ingresada no es valida.");
    cantidad = parseFloat(prompt("Ingrese la cantidad a convertir: "));
  }

  const tasaOrigen = tasasDeCambio.find((tasa) => {
    return tasa.divisa === monedaOrigen;
  });

  const tasaDestino = tasasDeCambio.find((tasa) => {
    return tasa.divisa === monedaDestino;
  });

  if (tasaOrigen !== undefined && tasaDestino !== undefined) {
    const cantidadConvertida =
      cantidad * (tasaDestino.valor / tasaOrigen.valor);
    return {
      cantidad: cantidad,
      monedaOrigen: tasaOrigen.divisa,
      monedaDestino: tasaDestino.divisa,
      cantidadConvertida: cantidadConvertida,
    };
  } else {
    alert("Moneda no valida.");
  }
}

//Realizar operacion
const resultado = convertirMoneda(datosUsuario());

alert(
    resultado.cantidad +
    resultado.monedaOrigen +
    " equivale a " +
    resultado.cantidadConvertida +
    resultado.monedaDestino
);

//Consultar si desea realizar otra operacion
const nuevaOperacion = prompt(
  "Desea realizar otra operacion? \n Si - (Digite 1) \n No - (Digite 2)"
);
if (nuevaOperacion === "1") {
  const resultado = convertirMoneda(datosUsuario());

  alert(
      resultado.cantidad +
      resultado.monedaOrigen +
      " equivale a " +
      resultado.cantidadConvertida +
      resultado.monedaDestino
  );
} else {
  alert("Muchas gracias por utilizar nuestro conversor de divisas.");
}
