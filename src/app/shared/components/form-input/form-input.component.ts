import { Component, Input, OnInit } from '@angular/core';
import { TipoInput } from '../../enum/tipo-input.enum';

@Component({
  selector: 'app-form-input',
  templateUrl: './form-input.component.html',
  styleUrls: ['./form-input.component.css']
})
export class FormInputComponent implements OnInit {
  @Input() label!: string;
  @Input() control: any;
  @Input() tipo!: number;
  @Input() maxLength!: number;
  @Input() minLength!: number;

  public tipoInput = TipoInput;

  constructor() { }

  ngOnInit(): void {
  }

}
