const array = [ 'um', 'dois', 'tres', 'quadro' ]

const [ item1, item2, ...restanteArray ] = array

const objeto = {
  nome: 'Tony',
  gatos: 6,
  gatoFavorito: 'Thomas'
}

console.log(restanteArray)

// const { nome, gatos, ...restanteObjeto } = objeto

// const [ a, b, ...restanteString ] = 'abcdefg'

// const foo = ( { nome: objetoNome } ) => {
//   const nome = 'Daniel'
//   console.log( nome, objetoNome )
// }
