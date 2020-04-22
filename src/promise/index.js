// Algo va a pasar (¿Cuándo? no sabemos ^_'), partiendo de una validación ejecutando resolve o reject según sea el caso

// Estructura de la promesa

const somethingWillHappen = () => {
  return new Promise((resolve, reject) => {
    const resolved = true
    const error = 'Algo falló (-- en somethingWillHappen() --)...'
    resolved
      ? resolve("Hey!!, it's OK")
      : reject(error)
  })
}

somethingWillHappen()
  .then((result) => {
    console.log(result) // Output: Hey!!, it's OK
  })
  .catch((err) => {
    console.log('Whooops', err)
  })

// Simulación, considerando el factor Tiempo
const somethingWillHappen2 = () => {
  return new Promise((resolve, reject) => {
    const resolved = true
    const error = new Error('Falló (-- en somethingWillHappen2() --)')
    resolved
      ? setTimeout(() => {
        resolve('True!, after 2 seconds')
      }, 2000)
      : reject(error)
  })
}

somethingWillHappen2()
  // Según sea el caso, pueden encadenarse más  .then()
  .then((result) => {
    console.log('Respuesta', result)
  })
  .then((result) => {
    console.log('Otro encadenamiendo de acciones')
  })
  .catch((err) => {
    console.log('Error en 2: ', err)
  })

// Ejecutar varias promesas al mismo tiempo (o encadenadas)
// Promise.all, retorna un arreglo con las respuestas de cada promesa

Promise.all([somethingWillHappen(), somethingWillHappen2()])
  .then((result) => {
    console.log('Array of results: ', result)
  }).catch((err) => {
    console.log('Ocurrió un error al ejecutar las promesas', err)
  })
