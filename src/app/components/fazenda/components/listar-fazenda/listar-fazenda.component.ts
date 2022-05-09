import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { TipoInput } from 'src/app/shared/enum/tipo-input.enum';

@Component({
  selector: 'app-listar-fazenda',
  templateUrl: './listar-fazenda.component.html',
  styleUrls: ['./listar-fazenda.component.css']
})
export class ListarFazendaComponent implements OnInit {
  public fazendas: Array<any> = [];
  public modalRef: BsModalRef | undefined;

  public form = new FormGroup({
    pesoVagem: new FormControl('', [Validators.required]),
    plantasMetros: new FormControl('', [Validators.required]),
    vagemPlata: new FormControl('', [Validators.required]),
  });

  public fazenda: any;

  public tipoInput = TipoInput;

  constructor(
    private modalService: BsModalService,
  ) { }

  ngOnInit(): void {
    this.fazendas = JSON.parse(localStorage.getItem('fazendas') as string);
  }

  openProdutividade(modal: any, index: number) {
    this.fazenda = this.fazendas[index];
    this.modalRef = this.modalService.show(modal, { class: 'modal-lg' });
  }

  closeModal() {
    this.form.reset();
    this.modalRef?.hide();
  }

  estimarProdutividadeFazenda() {
    if (this.form.valid) {
      this.fazenda.estimativa = 0;
      this.fazenda.talhoes.forEach((talhao: any, index: any) => {
        let totalVagens = ((parseInt(this.form.get('plantasMetros')?.value, 10) * (parseInt(this.form.get('vagemPlata')?.value), 10) * talhao.area) / 4);
        this.fazenda.talhoes[index].estimativa = (totalVagens / 1000) * parseInt(this.form.get('pesoVagem')?.value, 10);
        this.fazenda.estimativa += this.fazenda.talhoes[index].estimativa;
      });
    } else {
      this.form.markAllAsTouched();
    }
  }

  getProdutividadeTotal() {
    let produtividadeTotal = 0;
    this.fazenda?.talhoes?.forEach((talhao: any) => {
      let produtividadeTalhao = 0;
      talhao?.produtividade?.forEach((produtividade: any) => {
        produtividadeTalhao += parseInt(produtividade, 10);
      });
      produtividadeTalhao = produtividadeTalhao / (talhao?.produtividade?.length || 1);
      produtividadeTotal += produtividadeTalhao;
    });

    return produtividadeTotal / (this.fazenda?.talhoes?.length || 1);
  }

  getProdutividadeMedia() {
    return this.getProdutividadeTotal() / (this.fazenda?.talhoes?.length || 1);
  }

  getProdutividadeTalhao(talhao: any) {
    let produtividadeTalhao = 0;
    talhao?.produtividade?.forEach((produtividade: any) => {
      produtividadeTalhao += parseInt(produtividade, 10);
    });
    return produtividadeTalhao = produtividadeTalhao / (talhao?.produtividade?.length || 1);
  }
}
