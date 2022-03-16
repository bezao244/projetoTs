export class Negociacoes {
    constructor() {
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
