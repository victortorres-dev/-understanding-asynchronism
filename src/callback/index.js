// 1. Generar una funcion que permita la suma de dos numeros
// Una uncion "x" que procese datos
const doSum = (num1, num2) => num1 + num2

// una funcion y que obtiene datos para pasarselos como parámetros a una funcion callback(que espera datos)
const getData = (num1, num2, callback) => callback(num1, num2)

// La funcion "y" que recibe la data y el callback que va a procesar los datos
console.log(getData(5, 5, doSum))

// 2. Obtener la fecha y ora actuales y despues de 3 segundTos

// funcion que obtiene los datos
const setDate = (callback) => {
  console.log(new Date())
  setTimeout(() => {
    const dateAfter3seconds = new Date()
    callback(dateAfter3seconds)
  }, 3000)
}

// funcion que procesa o trabaja con la data y que obtiene datos para pasarselos como parámetros a una funcion callback(
const printDate = (DatetoPrint) => {
  console.log(DatetoPrint)
}

setDate(printDate)
