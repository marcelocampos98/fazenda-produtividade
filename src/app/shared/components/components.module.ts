import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FormInputComponent } from './form-input/form-input.component';
import { NgxMaskModule } from 'ngx-mask';
import { ControlMessagesComponent } from './control-messages/control-messages.component';



@NgModule({
  declarations: [
    FormInputComponent,
    ControlMessagesComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    NgxMaskModule.forRoot(),
  ],
  exports: [
    FormInputComponent
  ]
})
export class ComponentsModule { }
