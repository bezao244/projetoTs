import { Negociacao } from "../models/negociacao.js";
import { Negociacoes } from "../models/negociacoes.js";

export class NegociacaoController{
    private inputData: HTMLInputElement;
    private inputQuantidade: HTMLInputElement;
    private inputValor: HTMLInputElement;
    private negociacoes = new Negociacoes();

    //contruindo nossa classe com os inputs
    constructor(){
        this.inputData = document.querySelector('#data');
        this.inputQuantidade = document.querySelector('#quantidade');
        this.inputValor = document.querySelector('#valor');
    }

    //metodo para adicionar a negociacao criada
    adiciona(): void {
        const negociacao =this.criaNegociacao();

        //adicionando a negociacao na lista
        this.negociacoes.adiciona(negociacao);
        console.log(this.negociacoes.lista());
        this.limparFormulario();
    }

    //metodo para criar a negociacao
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