import { AbstractControl } from "@angular/forms";

export function IsMenorDeIdade(control: AbstractControl) {
    const dataNascimento = control.value;

    if (dataNascimento) {
        let agora = new Date();
        let [ano, mes, dia] = dataNascimento.split("-").map(Number);
        let depois18Anos = new Date(ano + 18, mes - 1, dia);

        if (depois18Anos > agora) {
            return { menorDeIdade: true };
        }
    }

    return null;
}