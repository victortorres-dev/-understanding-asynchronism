// async await, permite el comportamiento sincrono de nuestro código
// construcción de una promesa
const doSomethingAsync = () => {
  return new Promise((resolve, reject) => {
    const resolved = true
    const error = new Error('Test error')
    resolved
      ? setTimeout(() => {
        resolve('Do something Async')
      }, 3000)
      : reject(error)
  })
}

// implementación de Async
const doSomething = async () => {
  const something = await doSomethingAsync()
  console.log(something)
  return something
}

console.log('Before')
doSomething()
console.log('After')

// Capturar errores

const anotherFunction = async () => {
  try {
    const something = await doSomethingAsync()
    console.log('2: ', something)
    return something
  } catch (error) {
    console.error('2', error)
  }
}

console.log('Before2')
anotherFunction()
console.log('After2')
