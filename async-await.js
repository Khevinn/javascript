const ajax = ( method, url, callback ) => {
  const xhr = new XMLHttpRequest()
  xhr.open( method, url )
  const onload = () => {
    if ( xhr.status >= 400 ) {
      return onerror()
    }
    const contentType = xhr.getResponseHeader( 'Content-Type' )

    if ( contentType.includes( 'application/json' ) )
      callback( null, JSON.parse( xhr.responseText ) )

    else callback( null, xhr.responseText )
  }
  const onerror = () => {
    const contentType = xhr.getResponseHeader( 'Content-Type' )

    const objetoErro = new Error( xhr.statusText )
    objetoErro.status = xhr.status

    if ( contentType ) {

      if ( contentType.includes( 'application/json' ) )
        callback( objetoErro, JSON.parse( xhr.responseText ) )

      else callback( objetoErro, xhr.responseText )

    } else {
      callback( objetoErro )
    }
  }
  xhr.onload = onload
  xhr.onerror = onerror
  xhr.send()
}

const ajaxPromise = ( method, url ) =>
  new Promise( ( resolve, reject ) => {
    ajax( method, url, ( err, data ) => {
      if ( err ) reject( err )
      else resolve( data )
    } )
 } )

const sleep = ( ms ) => new Promise( ( resolve, reject ) => {
  setTimeout( () => {
    resolve( new Error( 'atingiu o timeout' ) )
  }, ms )
} );

( async () => {
  const response = await ajaxPromise( 'GET', 'https://pokeapi.co/api/v2/pokemon/1/789945' )
  console.log( response )
  console.log( 'trecho que esperou a requisição' )
} )()
