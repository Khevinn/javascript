/**
 * Laço de repetição ( Loop )
 */

function condicao() {
  const numeroAleatorio = Math.random()
  condicao.numeroAleatorio = numeroAleatorio
  const numeroArredontado = Math.round( numeroAleatorio )
  condicao.numeroArredontado = numeroArredontado
  const comparacao = numeroArredontado === 1
  return comparacao
}

console.log( 'iniciando repeticao por while, enquanto a condicao for verdadeira' )

let whileCount = 1
while( condicao() ) {
  whileCount++
  console.log(
    `contador no while: ${whileCount} ( ${condicao.resultado} === 1, ${condicao.numeroAleatorio} )`
  )
  return
  continue
}

console.log( 'iniciando repeticao por do while, enquanto a condicao for verdadeira' )

let doWhileCount = 1
do {
  doWhileCount++
  console.log(
    `contador no while: ${doWhileCount} ( ${condicao.resultado} === 1, ${condicao.numeroAleatorio} )`
  )
  break
  continue
} while( condicao() )

console.log( 'iniciando repeticao por for, enquanto a condicao for verdadeira' )

const array = []

for ( let forCount = 1; condicao(); forCount++ ) {
  console.log(
    `contador no for: ${forCount} ( ${condicao.resultado} === 1, ${condicao.numeroAleatorio} )`
  )
}

/**
 * Todos os laços de repetição tem duas funções extras.
 * break. Para parar a execução do laço sem que a próxima condição seja analisada e o restante do bloco executado.
 * 
 * continue. Para ir para a próxima execução ignorando o restante do bloco.
 */

for ( let forCountWithExtra = 1 ;condicao(); ) {
  console.log( `inicio do bloco for com o contador ${forCountWithExtra}` )
  if ( condicao() ) {
    console.log( 'parando a execução do loop com break' )
    break
  }
  if ( conficao() ) {
    console.log( 'indo para a proxima execução do loop com continue' )
    continue
  }
  console.log( `fim do bloco for com o contador ${forCountWithExtra}` )
  forCountWithExtra++
}
