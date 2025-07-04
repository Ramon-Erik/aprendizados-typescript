import Conta from "../types/Conta.js";
import { TipoTransacao } from "../types/TipoTransacao.js";
import { Transacao } from "../types/Transacao.js";
import ExtratoCompnent from "./extrato-component.js";
import  SaldoComponent from "./saldo-componente.js";

const elementoFormulario = document.querySelector(".block-nova-transacao form") as HTMLFormElement;

elementoFormulario.addEventListener("submit", function(event) {
    try {
        event.preventDefault();
        if (!elementoFormulario.checkValidity()) {
            alert("Por favor, preencha todos os campos da transação!");
            return;
        }
        const inputTipoTransacao = elementoFormulario.querySelector("#tipoTransacao") as HTMLSelectElement;
        const inputValor = elementoFormulario.querySelector("#valor") as HTMLInputElement;
        const inputData = elementoFormulario.querySelector("#data") as HTMLInputElement;
        
        let tipoTransacao: TipoTransacao = inputTipoTransacao.value as TipoTransacao; // assim, a string que vem precisa ser uma dentro de tipo transação
        let valor: number = inputValor.valueAsNumber;
        let data: Date = new Date(inputData.value);
    
        const novaTransacao: Transacao = {
            tipo: tipoTransacao,
            valor: valor,
            data: data
        };
    
        Conta.registrarTransacao(novaTransacao)
        SaldoComponent.atualizar()
        ExtratoCompnent.atualizar()
        console.log(novaTransacao);
        elementoFormulario.reset();
    } catch (error) {
        alert(error)
    }
}); 