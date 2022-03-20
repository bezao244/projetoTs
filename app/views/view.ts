//criando a classe view para ser reultilizado nas outras views criadas
export abstract class View<T>{

    protected elemento: HTMLElement;
    //na hora de instanciar a classe passará o elemento HTML que será ultilizado
    constructor(seletor: string){
        this.elemento = document.querySelector(seletor);
    }

    //criando um metodo para fazer o update das view cada vez q for adicionado uma nova negociacao
    public update(model: T): void{
        const template = this.template(model);
        this.elemento.innerHTML = template;
    }
    //tornando obrigatorio qnd vc cria uma nova view ter um template
    protected abstract template(model: T): string;
}