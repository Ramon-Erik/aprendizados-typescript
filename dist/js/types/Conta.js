import { TipoTransacao } from "./TipoTransacao.js";
let saldo = 1;
function debitar(valor) {
    if (valor <= 0) {
        throw new Error("O valor a ser debtado deve ser maior que 0");
    }
    if (valor >= saldo) {
        throw new Error("Saldo insuficiente");
    }
    saldo -= valor;
}
function depositar(valor) {
    if (valor <= 0) {
        throw new Error("O valor a ser debtado deve ser maior que 0");
    }
    saldo += valor;
}
const Conta = {
    getSaldo() {
        return saldo;
    },
    getDataAcesso() {
        return new Date();
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
            throw new Error("Transação é inválido!");
        }
    },
};
export default Conta;
