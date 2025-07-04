import Conta from "../types/Conta.js";
import { FormatoData } from "../types/FormatoData.js";
import { TipoTransacao } from "../types/TipoTransacao.js";
import { formatarData, formatarMoeda } from "../utils/formatters.js";
const elementoRegistroTransacoesExtrato = document.querySelector(".extrato .registro-transacoes");
function renderizarExtrato() {
    const grupoTransacoes = Conta.getGruposTransacoes();
    elementoRegistroTransacoesExtrato.innerHTML = "";
    let htmlRegistroTransacoes = "";
    for (let grupoTransacao of grupoTransacoes) {
        let htmlTransacaoItem = "";
        for (let transacao of grupoTransacao.transacoes) {
            htmlTransacaoItem += `
        <div class="transacao-item">
          <div class="transacao-info">
              <span class="tipo">${transacao.tipo}</span>
              <strong class="valor">${transacao.tipo !== TipoTransacao.DEPOSITO ? "- " : " "}${formatarMoeda(transacao.valor)}</strong>
          </div>
          <time class="data">${formatarData(transacao.data, FormatoData.DIA_MES)}</time>
        </div>`;
        }
        htmlRegistroTransacoes += `<div class="transacoes-group"><strong class="mes-group">${grupoTransacao.label}</strong>${htmlTransacaoItem}</div>`;
    }
    if (htmlRegistroTransacoes === "") {
        htmlRegistroTransacoes = "<div>Nada de extrato</div>";
    }
    elementoRegistroTransacoesExtrato.innerHTML = htmlRegistroTransacoes;
}
const ExtratoCompnent = {
    atualizar() {
        renderizarExtrato();
    }
};
renderizarExtrato();
export default ExtratoCompnent;
