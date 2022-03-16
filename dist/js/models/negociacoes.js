export class Negociacoes {
    constructor() {
        //a lista negociacoes so podera receber uma negociacao
        this.negociacoes = [];
    }
    //metodo para adicionar negociacoe na lista
    adiciona(negociacao) {
        this.negociacoes.push(negociacao);
    }
    //metodo para retornar a lista de negociacoes
    lista() {
        return this.negociacoes;
    }
}
