//criando a classe view para ser reultilizado nas outras views criadas
export class View {
    //na hora de instanciar a classe passará o elemento HTML que será ultilizado
    constructor(seletor) {
        this.elemento = document.querySelector(seletor);
    }
    //criando um metodo para fazer o update das view cada vez q for adicionado uma nova negociacao
    update(model) {
        const template = this.template(model);
        this.elemento.innerHTML = template;
    }
}
