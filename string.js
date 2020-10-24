var string = 'Texto simples. Para teste'

var regexp = /^(?<first>[A-Z]{5}) (?<second>simples)/i

var result = regexp.exec( string )

var stringTrim = ' string para test em trim  '

var stringParaSplit = 'janeiro|fevereiro|março|abril|maio|junho|julho|agosto|setempro|outubro|novembro|dezembro'

var stringParaSplit2 =
  '"odeia a materia, mas espero que as outras melhorem","otimo video somente poucos efeitos"'

/**
 * Procura por uma string.
 */
string.includes

/**
 * Procura por string no inicio.
 */
string.startsWith( '' )

/**
 * Procura por string no final.
 */
string.endsWith()

/**
 * Procura e substitui uma string e retorna o resultado.
 */
string.replace( 'procurar', 'substituir' )

/**
 * Procura por uma string e retornar a posucao da primeira encontrado.
 * 
 * Caso não encontre é retornado -1.
 */
string.indexOf( 's' )

/**
 * Procura por uma string e retornar a posicao do ultimo encontrado.
 * 
 * Caso não encontre é retornado -1.
 */
string.lastIndexOf( 's' )

/**
 * Divide a string em uma regra definida.
 * O resultado é um array.
 */
string.split()

/**
 * Junta a string com pelo menos uma.
 */
string.concat()

/**
 * Cora a string e retornar a comprimento solicitada.
 */
string.substr()

/**
 * Corta a string e retornar a distancia solicitada.
 */
string.substring(  )

/**
 * Corta a string e retornar a distancia solicitada.
 * 
 * Obs: Aceita números negativos.
 */
string.slice()

/**
 * Converte todos os caracteres na string para maiusculo.
 */
string.toUpperCase

/**
 * Converte todos os caracteres na string para minusculo.
 */
string.toLowerCase

/**
 * Remove os espaços das extremidades da string.
 */
stringTrim.trim()
// Remove os espaços da extremidade esquerda da string.
stringTrim.trimLeft()
// Remove os espaços da extremidade direita da string.
stringTrim.trimRight()

/**
 * Retorna o caractere definido na posição.
 */
string.charAt( 0 )

/**
 * Retorna o código ( unicode ) do caracter definido na posição.
 */
string.charCodeAt()

string.match( 'Teste' )
