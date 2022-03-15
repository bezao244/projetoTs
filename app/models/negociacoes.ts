import { Negociacao } from "./negociacao.js";

export class Negociacoes{
    private negociacoes: Array<Negociacao> = [];

    //metodo para adicionar negociacoe na lista
    adiciona(negociacao: Negociacao){
        this.negociacoes.push(negociacao);
    }

    //metodo para retornar a lista de negociacoes
    lista():Array<Negociacao>{
        return [...this.negociacoes];
    }
}