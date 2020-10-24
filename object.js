var objeto = {
  criadoEm: new Date()
}

Object.defineProperty( objeto, 'propriedade', {
  /**
   * Define o valor da propriedade no objeto.
   */
  value: new Date(),

  /**
   * Define se a propriedade pode ser configurada novamente.
   */
  configurable: Boolean(),

  /**
   * Define se a propriedade pode ser listada dentro do objeto.
   */
  enumerable: Boolean(),
  /**
   * Define se a propriedade pode ter o valor alterado.
   */
  writable: Boolean(),

  /**
   * Get e Set.
   * 
   * Atenção, quando for definido get ou set, a descrição da propriedade não pode conter value e nem writable.
   */

  /**
   * Define a função get para em qualquer momento que o valor seja solicitado.
   * 
   * @example
   * objeto.propriedade
  */
  get() {},
  /**
   * Define a função de set com um argumento que 
   * 
   * @example
   * objeto.propriedade = value
  */
  set( value ) {}
} )
