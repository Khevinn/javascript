const string1 = 'string 1'

const string2 = 'string 2'

const stringConcatenada = string1 + ' ' + string2

const stringConcatenadaComTemplate = `${string1} ${string2}`

const objeto = {
  toString() {
    return 'foi chamado a funcao 2 string'
  }
}

console.log( `${objeto}` )
