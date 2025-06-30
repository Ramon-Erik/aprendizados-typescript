import { TipoTransacao } from "./TipoTransacao.js";
import { Transacao } from "./Transacao.js";

let saldo: number = 1;

function debitar(valor: number):void {
  if (valor <= 0) {
    throw new Error("O valor a ser debtado deve ser maior que 0");
  }
  if (valor >= saldo) {
    throw new Error("Saldo insuficiente");
  }
  saldo -= valor
}
function depositar(valor: number): void {
  if (valor <= 0) {
    throw new Error("O valor a ser debtado deve ser maior que 0");
  }
  saldo += valor
}

const Conta = {
  getSaldo() {
    return saldo;
  },
  getDataAcesso(): Date {
    return new Date();
  },
  registrarTransacao(novaTransacao: Transacao): void {
    if (novaTransacao.tipo == TipoTransacao.DEPOSITO) {
      depositar(novaTransacao.valor)
    } else if (
      novaTransacao.tipo == TipoTransacao.TRANSFERENCIA ||
      novaTransacao.tipo == TipoTransacao.PAGAMENTO_BOLETO
    ) {
      debitar(novaTransacao.valor)
    } else {
      throw new Error("Transação é inválido!");
    }
  },
};

export default Conta