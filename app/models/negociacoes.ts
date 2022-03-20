import { Negociacao } from "./negociacao.js";

export class Negociacoes{
    //a lista negociacoes so podera receber uma negociacao
    private negociacoes: Array<Negociacao> = [];

    //metodo para adicionar negociacoe na lista
    public adiciona(negociacao: Negociacao){
        this.negociacoes.push(negociacao);
    }

    //metodo para retornar a lista de negociacoes
    public lista(): ReadonlyArray<Negociacao>{
        return this.negociacoes;
    }
}