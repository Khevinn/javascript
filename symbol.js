const propertySymbol = Symbol( 'access account information' )

// console.log( typeof symbol, typeof symbol2 )
// console.log( Symbol() === Symbol() )

// console.log( symbol )

var object = {
  ['name']: 'Tony',
  [propertySymbol]: '123456'
}

Object.defineProperty( object, propertySymbol, { enumerable: false } )

class User {
  [propertySymbol]
  constructor( name, password ) {
    this.name = name
    this[propertySymbol] = password
    Object.defineProperty( this, propertySymbol, { enumerable: false } )
  }
}
