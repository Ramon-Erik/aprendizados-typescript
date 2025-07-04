import Conta from "../types/Conta.js";
import ExtratoCompnent from "./extrato-component.js";
import SaldoComponent from "./saldo-componente.js";
const elementoFormulario = document.querySelector(".block-nova-transacao form");
elementoFormulario.addEventListener("submit", function (event) {
    try {
        event.preventDefault();
        if (!elementoFormulario.checkValidity()) {
            alert("Por favor, preencha todos os campos da transação!");
            return;
        }
        const inputTipoTransacao = elementoFormulario.querySelector("#tipoTransacao");
        const inputValor = elementoFormulario.querySelector("#valor");
        const inputData = elementoFormulario.querySelector("#data");
        let tipoTransacao = inputTipoTransacao.value; // assim, a string que vem precisa ser uma dentro de tipo transação
        let valor = inputValor.valueAsNumber;
        let data = new Date(inputData.value);
        const novaTransacao = {
            tipo: tipoTransacao,
            valor: valor,
            data: data
        };
        Conta.registrarTransacao(novaTransacao);
        SaldoComponent.atualizar();
        ExtratoCompnent.atualizar();
        console.log(novaTransacao);
        elementoFormulario.reset();
    }
    catch (error) {
        alert(error);
    }
});
