import { Negociacao } from "../models/negociacao.js";
import { Negociacoes } from "../models/negociacoes.js";
import { MensagemView } from "../views/mensagem-view.js";
import { NegociacoesView } from "../views/negociacoes-view.js";

export class NegociacaoController{
    private inputData: HTMLInputElement;
    private inputQuantidade: HTMLInputElement;
    private inputValor: HTMLInputElement;
    private negociacoes = new Negociacoes();
    private negociacoesView = new NegociacoesView("#negociacoesview");
    private mensagemView = new MensagemView("#mensagemView");
    //contruindo nossa classe com os inputs
    constructor(){
        this.inputData = document.querySelector('#data');
        this.inputQuantidade = document.querySelector('#quantidade');
        this.inputValor = document.querySelector('#valor');
        this.negociacoesView.update(this.negociacoes);
    }

    //metodo para adicionar a negociacao criada
    public adiciona(): void {
        const negociacao =this.criaNegociacao();

        //adicionando a negociacao na lista
        this.negociacoes.adiciona(negociacao);
        
        this.limparFormulario();
        //atualizando as view da página 
        this.atualizaView();
    }

    //metodo para criar a negociacao
    private criaNegociacao(): Negociacao {
        const exp = /-/g;
        //convertendo os valores antes de passar para o construtor
        const date = new Date(this.inputData.value.replace(exp, ','));
        const quantidade = parseInt(this.inputQuantidade.value);
        const valor = parseFloat(this.inputValor.value);

        //criando a negociacao com o valores convertidos
        return new Negociacao(date, quantidade, valor);
    }

    //metodo para limpar formulario apos adicao de negociacao
    private limparFormulario(): void{
        this.inputData.value = '';
        this.inputQuantidade.value = '';
        this.inputValor.value = ''; 
        this.inputData.focus();
    }

    //criando um metodo para atualizar a view na página
    private atualizaView(): void{
        //dando update na view cada vez q for adicionado uma nova negociacao
        this.negociacoesView.update(this.negociacoes);

        //mostrando mensagem que a negociacao foi adicionada
        this.mensagemView.update('Negociação adicionada com sucesso!');
    }
}