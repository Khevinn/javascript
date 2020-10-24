const boolean1 = true
const boolean2 = false

const valoresFalsos = [ undefined, null, 0, '', false ]

const valoresVerdadeiros = [ '0', true, -1, 1,  ]

// Todos o resto que não esteja nos valores falsos

/**
 * Operatores Lógicos.
 * 
 * - Analisam condições.
 */

 const negacao = !boolean1

/**
 * AND ( E )
 * 
 * Retornar true se a comparação entre as duas for verdadeira.
 */
const e = boolean1 && boolean2

/**
 * OR ( OU )
 * 
 * Retornar true se pelo menos uma das condições forem verdadeiras
 */
const ou = boolean1 || boolean2

/**
 * NOT AND ( NAO E )
 * 
 * Retornar o resultado do AND negado
 */
const naoE = !( boolean1 && boolean2 )

/**
 * NOT OR ( NAO OUT )
 * 
 * Retornar o resultado do OU negado
 */
const naoOu = !( boolean1 || boolean2 )
