import { Negociacao } from "../models/negociacao.js";

export class NegociacaoController{
    private inputData: HTMLInputElement;
    private inputQuantidade: HTMLInputElement;
    private inputValor: HTMLInputElement;

    //contruindo nossa classe com os inputs
    constructor(){
        this.inputData = document.querySelector('#data');
        this.inputQuantidade = document.querySelector('#quantidade');
        this.inputValor = document.querySelector('#valor');
    }

    adiciona(): void {
        const negociacao =this.criaNegociacao();
        console.log(negociacao);
        this.limparFormulario();
    }
    criaNegociacao(): Negociacao {
        const exp = /-/g;
        //convertendo os valores antes de passar para o construtor
        const date = new Date(this.inputData.value.replace(exp, ','));
        const quantidade = parseInt(this.inputQuantidade.value);
        const valor = parseFloat(this.inputValor.value);

        //criando a negociacao com o valores convertidos
        return new Negociacao(date, quantidade, valor);
    }

    //metodo para limpar formulario apos adicao de negociacao
    limparFormulario(): void{
        this.inputData.value = '';
        this.inputQuantidade.value = '';
        this.inputValor.value = ''; 
        this.inputData.focus();
    }
}