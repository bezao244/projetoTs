import { View } from "./view.js";

export class MensagemView extends View<string> {

    //criando template para mensagem de conclusao com exito
    protected template(model: string): string{
        return `
            <p class="alert alert-info">${model}</p>
        `;
    }
}