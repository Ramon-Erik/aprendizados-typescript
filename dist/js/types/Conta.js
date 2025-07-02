import { TipoTransacao } from "./TipoTransacao.js";
let saldo = parseFloat(localStorage.getItem("saldo")) || 0;
const transacoes = JSON.parse(localStorage.getItem("transacoes"), (key, value) => {
    if (key === "data") {
        return new Date(value);
    }
    return value;
}) || [];
function debitar(valor) {
    if (valor <= 0) {
        throw new Error("O valor a ser debtado deve ser maior que 0");
    }
    if (valor >= saldo) {
        throw new Error("Saldo insuficiente");
    }
    saldo -= valor;
    localStorage.setItem("saldo", String(saldo));
}
function depositar(valor) {
    if (valor <= 0) {
        throw new Error("O valor a ser debtado deve ser maior que 0");
    }
    saldo += valor;
    localStorage.setItem("saldo", saldo.toString());
}
const Conta = {
    getSaldo() {
        return saldo;
    },
    getDataAcesso() {
        return new Date();
    },
    getGruposTransacoes() {
        const gruposTransacoes = [];
        const listaTransacoes = structuredClone(transacoes);
        const transacoesOrdenadas = listaTransacoes.sort((t1, t2) => t2.data.getTime() - t2.data.getTime());
        let labelGrupoTransacoes = "";
        for (let t of transacoesOrdenadas) {
            let label = t.data.toLocaleDateString("pt-br", { month: "long", year: "numeric" });
            if (label != labelGrupoTransacoes) {
                labelGrupoTransacoes = label;
                gruposTransacoes.push({
                    label: labelGrupoTransacoes,
                    transacoes: []
                });
            }
            gruposTransacoes.at(-1).transacoes.push(t);
            console.log("oi", gruposTransacoes);
        }
        return gruposTransacoes;
    },
    registrarTransacao(novaTransacao) {
        if (novaTransacao.tipo == TipoTransacao.DEPOSITO) {
            depositar(novaTransacao.valor);
        }
        else if (novaTransacao.tipo == TipoTransacao.TRANSFERENCIA ||
            novaTransacao.tipo == TipoTransacao.PAGAMENTO_BOLETO) {
            debitar(novaTransacao.valor);
        }
        else {
            throw new Error("Transação inválida!");
        }
        transacoes.push(novaTransacao);
        console.log(this.getGruposTransacoes());
        localStorage.setItem("transacoes", JSON.stringify(transacoes));
    },
};
export default Conta;
