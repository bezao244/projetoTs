export class Negociacao {
    constructor(data, quantidade, valor) {
        this._data = data;
        this.quantidade = quantidade;
        this.valor = valor;
    }
    get data() {
        //protegendo de alteracoes depois do valor ser atribuido a data
        const data = new Date(this._data.getTime());
        return data;
    }
    get volume() {
        return this.quantidade * this.valor;
    }
}
