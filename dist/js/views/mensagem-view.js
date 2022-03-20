import { View } from "./view.js";
export class MensagemView extends View {
    //criando template para mensagem de conclusao com exito
    template(model) {
        return `
            <p class="alert alert-info">${model}</p>
        `;
    }
}
