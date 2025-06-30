// // Em ts as variáveis tem tipagem estática
// // informa o tipo inicial com : tipo
// // depois não pde mudar
// // se não falar o tipo, o primeiro assign será o tip que ela recebe

// let valor: number = 300
// let nome: string = '32'
// let logicas: boolean = false
// let qualquer: any = ""
// qualquer = 938

// // arrays
// // você define o tipo do conteudo do array, ou ele coloca any
// const listaQualquer = []
// listaQualquer.push("a", 1, false)

// const listaTipada: number[] = []
// listaTipada.push(123)

// // tipo personalizado, qualquer coisa diferente disso está errado, 
// // quando for criar uma variavel com esse tipo
// type Transacao = {
//     tipo: TipoTransacao;
//     data: Date;
//     valor: number;
// }

// // enum
// enum TipoTransacao {
//     DEPOSITO = "Depósito",
//     TRANSFERENCIA = "Transferência",
//     PAGAMENTO_BOLETO = "Pagamento de Boleto"
// }

// const novaTransacao: Transacao = {
//     tipo: TipoTransacao.DEPOSITO,
//     data: new Date(),
//     valor: 0.00
// }

// console.log(novaTransacao)

