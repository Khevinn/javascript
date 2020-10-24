const ajax = ( method, url, callback ) => {
  const xhr = new XMLHttpRequest()
  xhr.open( method, url )
  xhr.onload = () => {
    const contentType = xhr.getResponseHeader( 'Content-Type' )

    if ( contentType.includes( 'application/json' ) )
      callback( JSON.parse( xhr.responseText ) )

    else callback( xhr.responseText )
  }
  xhr.send()
}

ajax( 'GET', 'https://pokeapi.co/api/v2/pokemon/1', ( objeto ) => {
  console.log( objeto )
} )

console.log( 'não esperou a requisição' )
