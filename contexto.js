/**
 * Utilizado dessa forma pegará o contexto global.
 * Se for nodejs será o objeto global.
 * Se extiver utilizando no browser será o objeto window
 */
this

function foo () {
  /**
   * Contexto da função.
   * Se o contexto da função não for definida ele pegará o contexto anterior a ele.
   * Nesse caso seria o objeto global do nodejs.
   * Ou se caso for utilizado no browser é o objeto window.
   */
  console.log( this )
}

function foo2() {
  console.log( this )
}

/**
 * Apply assim como outras funções tem o poder de alterar o contexto de uma função. 
 * Atualmente para conseguir alterar o contexto na função temos dois métodos auxiliares:
 * 
 * apply
 * call
 * 
 * bind
*/
foo2.apply( 'novo contexto' )
