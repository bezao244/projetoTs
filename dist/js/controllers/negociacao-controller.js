import { Negociacao } from "../models/negociacao.js";
import { Negociacoes } from "../models/negociacoes.js";
import { NegociacoesView } from "../views/negociacoes-view.js";
export class NegociacaoController {
    //contruindo nossa classe com os inputs
    constructor() {
        this.negociacoes = new Negociacoes();
        this.negociacoesView = new NegociacoesView("#negociacoesview");
        this.inputData = document.querySelector('#data');
        this.inputQuantidade = document.querySelector('#quantidade');
        this.inputValor = document.querySelector('#valor');
        this.negociacoesView.update(this.negociacoes);
    }
    //metodo para adicionar a negociacao criada
    adiciona() {
        const negociacao = this.criaNegociacao();
        //adicionando a negociacao na lista
        this.negociacoes.adiciona(negociacao);
        //dando update na view cada vez q for adicionado uma nova negociacao
        this.negociacoesView.update(this.negociacoes);
        this.limparFormulario();
    }
    //metodo para criar a negociacao
    criaNegociacao() {
        const exp = /-/g;
        //convertendo os valores antes de passar para o construtor
        const date = new Date(this.inputData.value.replace(exp, ','));
        const quantidade = parseInt(this.inputQuantidade.value);
        const valor = parseFloat(this.inputValor.value);
        //criando a negociacao com o valores convertidos
        return new Negociacao(date, quantidade, valor);
    }
    //metodo para limpar formulario apos adicao de negociacao
    limparFormulario() {
        this.inputData.value = '';
        this.inputQuantidade.value = '';
        this.inputValor.value = '';
        this.inputData.focus();
    }
}
