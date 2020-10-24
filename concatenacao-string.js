const string1 = 'string 1'

const string2 = 'string 2'

const stringConcatenada = string1 + ' ' + string2

const objeto = {
  toString() {
    return 'objeto convertido para string'
  }
}

class Animal {
  constructor( name ) {
    this.name = name
  }
  toString() {
    return 'instancia de animal convertida para string (' + this.name + ')'
  }
}
