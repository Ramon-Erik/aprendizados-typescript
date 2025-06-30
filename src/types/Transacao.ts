import { TipoTransacao } from "./TipoTransacao.js";

export type Transacao = {
    tipo: TipoTransacao;
    data: Date;
    valor: number;
}