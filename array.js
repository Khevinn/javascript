const users = [
  { name: 'Lorem', age: 18 }, // 0
  { name: 'Daniel', age: 30 },
  { name: 'Augusto', age: 24 },
  { name: 'Alan', age: 26 },
  { name: 'Laura', age: 38 }, // 4
]

users.forEach( ( user, index, users ) => {} )

const usersWithId = users.map(
  ( user, index, users ) => Object.assign( {}, user, { id: index + 1 } )
)

const usersWithIdAndFilter = usersWithId.filter( user => user.age > 18 )

const user = usersWithIdAndFilter.find( ( user, index ) => {
  return user.name.startsWith( 'A' )
} )

const userIndex = usersWithIdAndFilter.findIndex( ( user, index ) => {
  return user.name.startsWith( 'A' )
} )

const resultSome = usersWithIdAndFilter.some( ( user, index, array ) => {
  // console.log( user.name, index )
  return user.name.includes( 'o' )
} )

const resultsEvery = usersWithIdAndFilter.every( ( user, index, array ) => {
  // console.log( user.name, index )
  return user.name.includes( 'o' )
} )

/**
 * FILO
 * First in last out
 * Primeiro a entrar ultimo a sair
 */
const stack = [ 1, 2, 3, 4, 5 ]

stack.pop

stack.push

/**
 * FIFO
 * First in first out
 * Primeiro a entrar primeiro a sair
*/

const queue = []

queue.push( 1, 2, 3, 4, 5 )

queue.shift

const list = [ 1, 2, 3, 5, 12 ]

list.unshift

const listOfNames = [ 'Dobi', 'Sakura', 'Thomas', 'Cacau', 'Mel', 'Cachoeira' ]

const result = listOfNames.splice( listOfNames.indexOf( 'Sakura' ), 1 )

const result2 = listOfNames.splice( 2, 0, 'Pistache', 'Dr. House' )

/*
const users = [
  { name: 'Lorem', age: 18 }, // 0
  { name: 'Daniel', age: 30 },
  { name: 'Augusto', age: 24 },
  { name: 'Alan', age: 26 },
  { name: 'Laura', age: 38 }, // 4
]
*/

const users2 = [
  { name: 'Lorem', age: 32 }, // 0
  { name: 'Daniel', age: 41 },
  { name: 'Augusto', age: 52 },
  { name: 'Alan', age: 8 },
  { name: 'Laura', age: 98 }, // 4
]

const reduce = ( previous, current /* user */, index, array ) => {
  return previous + current.age
}

const newArray = usersWithId.concat( users2 )

const totalAges = newArray.reduce( reduce, 0 )

const numbers = [ 1, 5, 7, 0, 15, 6, 78, 4 ]

const numberOrder = [ 0, 1, 15, 4, 5 ]

const alfa = [ 'a', 'b', 'g', 'c', 'f', 'd' ]

numbers.sort()

numbers.sort( ( numberA, numberB ) => {
  if ( numberA < numberB ) return 1
  else if ( numberA > numberB ) return -1
  return 0
} )
