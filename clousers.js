import ic from 'node-icecream'

const sayHi = (firstName, secondName) => {
  const getFullName = () => {
    return firstName + secondName
  }
}

ic('Hello' + getFullName)
ic('Bye' + getFullName)