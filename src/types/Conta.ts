import { TipoTransacao } from "./TipoTransacao.js";
import { GrupoTransacao } from "./GrupoTransacao.js";
import { Transacao } from "./Transacao.js";

let saldo: number = parseFloat(localStorage.getItem("saldo")) || 0;
const transacoes: Transacao[] = JSON.parse(localStorage.getItem("transacoes"), (key: string, value: string) => {
  if (key === "data") {
    return new Date(value)
  }
  return value
}) || []

function debitar(valor: number):void {
  if (valor <= 0) {
    throw new Error("O valor a ser debtado deve ser maior que 0");
  }
  if (valor >= saldo) {
    throw new Error("Saldo insuficiente");
  }
  saldo -= valor
  localStorage.setItem("saldo", String(saldo))
}
function depositar(valor: number): void {
  if (valor <= 0) {
    throw new Error("O valor a ser debtado deve ser maior que 0");
  }
  saldo += valor
  localStorage.setItem("saldo", saldo.toString())
}

const Conta = {
  getSaldo() {
    return saldo;
  },
  getDataAcesso(): Date {
    return new Date();
  },
  getGruposTransacoes(): GrupoTransacao[] {
    const gruposTransacoes: GrupoTransacao[] = []
    const listaTransacoes: Transacao[] = structuredClone(transacoes)
    const transacoesOrdenadas: Transacao[] = listaTransacoes.sort((t1, t2) => t2.data.getTime() - t2.data.getTime())
    let labelGrupoTransacoes: string = ""
    for (let t  of transacoesOrdenadas) {
      let label: string = t.data.toLocaleDateString("pt-br", {month:"long", year: "numeric"})
      if (label != labelGrupoTransacoes) {
        labelGrupoTransacoes = label
        gruposTransacoes.push({
            label: labelGrupoTransacoes,
            transacoes: []
          })
      }
      gruposTransacoes.at(-1).transacoes.push(t)
      console.log("oi", gruposTransacoes)
    }
    return gruposTransacoes
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
      throw new Error("Transação inválida!");
    }
    transacoes.push(novaTransacao)
    console.log(this.getGruposTransacoes())
    localStorage.setItem("transacoes", JSON.stringify(transacoes))
  },
};

export default Conta