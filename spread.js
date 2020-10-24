const foo = ( name, ...args ) => {
  console.log( arguments )
  args.forEach( arg => console.log( arg ) )
}

function foo2() {
  Object.values( arguments ).forEach( function( arg ) {
    console.log( arg )
  } )
}

( function ( number, string, ...args ) {
  Object.values( arguments ).slice( 2 )
} )( 1, 'string', false )