import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ControlMessagesService {

  static getValidatorErrorMessage(validatorName: any, validatorValue?: any) {
    const config: any = {
      'required': 'Obrigatório',
      'email': 'E-mail Inválido',
      'menorDeIdade': 'Não é permitido cadastro de menores de 18 anos de idade.',
      'mask': `O valor informado deve seguir esse padrão ${validatorValue.requiredMask}`
    };

    return config[validatorName];
  }
}
