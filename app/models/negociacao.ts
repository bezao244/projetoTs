export class Negociacao {
    //os atributos nao podem ser alterados depois de seus valores salvos pelo readonly
    private _data: Date;
    public readonly quantidade: number;
    public readonly valor: number;

    constructor(data: Date, quantidade: number, valor: number) {
        this._data = data;
        this.quantidade = quantidade;
        this.valor = valor;
    }
    get data(): Date{
        //protegendo de alteracoes depois do valor ser atribuido a data
        const data = new Date(this._data.getTime());
        return data;
    }
    get volume():number {
        return this.quantidade * this.valor;
    }
}