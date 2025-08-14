const array1: [string, string, number] = ['primeira str', 'segunda str', 3]
// isso é uma tupla
// da para definir os valore e a ordem aceitos no array
// como aqui é especifico os valores, eles são obrigatórios
// nos outros não, pois um array pode ser vazio

const array2: Array<string> = ['a']
// definir somente o tipo generico do array

const array3: Array<string | [] | {nome: string}>  = [{nome: ''}, [], '', '']
// usado o union types  