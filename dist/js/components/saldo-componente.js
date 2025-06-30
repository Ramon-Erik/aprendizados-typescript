import { formatarData, formatarMoeda } from "../utils/formatters.js";
import { FormatoData } from "../types/FormatoData.js";
import Conta from "../types/Conta.js";
const elementoSaldo = document.querySelector(".saldo-valor .valor");
const elementoData = document.querySelector(".block-saldo time");
if (elementoData != null) {
    elementoData.textContent = formatarData(Conta.getDataAcesso(), FormatoData.DIA_SEMANA_DIA_MES_ANO);
}
setSaldo();
export function setSaldo() {
    if (elementoSaldo != null) {
        elementoSaldo.textContent = formatarMoeda(Conta.getSaldo());
    }
}
const SaldoComponent = {
    atualizar() {
        setSaldo();
    }
};
export default SaldoComponent;
