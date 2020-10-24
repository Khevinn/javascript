/**
 * 
 * Tipos de números em algumas linguagens
 * 
 * int = ..., -99, -98, ... -1, 0, 1, 2, 3, ..., 99, 100, ...
 * float = ..., -0.2, 0.2001, 0.2002, ..., 1.00, 1.0000000000000000000000000001, ...
 * double = ..., -0.10, 0.00, 0.22, 1.04, ...
 */

var number = 924785262489118

/**
 * Convert o número para uma string
 */
number.toString()

/**
 * returna o número na notação em ponto fixo ou exponencial
 * @url https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Number/prototype
 * @url https://www.embarcados.com.br/entendendo-a-aritmetica-em-ponto-fixo/
 */
number.toPrecision()

/**
 * returna o número representado em uma notação exponencial
 */
number.toExponential()

/**
 * Retorna o maior número positivo possível.
 */
Number.MAX_VALUE

// Menor número possível.
Number.MIN_VALUE

/**
 * Retornar o maior número positivo possível dentro do tipo "number".
 */
Number.MAX_SAFE_INTEGER

// Menor número possível do tipo número "number".
Number.MIN_SAFE_INTEGER
