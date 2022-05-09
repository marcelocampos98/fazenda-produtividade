import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { TipoInput } from 'src/app/shared/enum/tipo-input.enum';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-cadastrar-fazenda',
  templateUrl: './cadastrar-fazenda.component.html',
  styleUrls: ['./cadastrar-fazenda.component.css']
})
export class CadastrarFazendaComponent implements OnInit {
  public form = new FormGroup({
    nome: new FormControl('', [Validators.required]),
    talhoes: new FormArray([])
  });

  public id!: number;

  public talhao: any;

  public disable = false;

  public talhaoId: number = 1;

  public formProdutividade: any;

  public tipoInput = TipoInput;
  public modalRef: BsModalRef | undefined;

  public indexProdutividade: any;

  constructor(
    private modalService: BsModalService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.buildForm();
    this.route.params.subscribe((params: any) => {
      if (params.id) {
        let fazendas = JSON.parse(localStorage.getItem('fazendas') as string);
        let fazenda = fazendas[params.id];

        this.id = params.id;

        if (fazenda.talhoes) {
          fazenda.talhoes.forEach((talhao: any) => {
            (this.form.get('talhoes') as FormArray).push(new FormGroup({
              id: new FormControl(talhao.id),
              area: new FormControl(talhao.area, [Validators.required]),
              produtividade: new FormControl(talhao.produtividade),
            }));
          });
        };
        this.form.patchValue(fazenda);
      }
    });

    if (this.router.url.includes('visualizar')) {
      this.disable = true;
      this.form.disable()
    } else {
      this.disable = false;
      this.form.enable();
    }
  }

  cadastrar() {
    if (this.form.valid) {
      let fazendas = JSON.parse(localStorage.getItem('fazendas') as string) as unknown || [];
      if (this.id) {
        (fazendas as Array<any>)[this.id] = this.form.value;
      } else {
        (fazendas as Array<any>)?.push(this.form.value);
      }
      localStorage.setItem('fazendas', JSON.stringify(fazendas));
      this.router.navigate(['/']);
    } else {
      this.form.markAllAsTouched();
    }
  }

  salvarTalhao() {
    if (this.talhao.valid) {
      this.talhao.get('id')?.setValue(this.talhaoId);
      (this.form.get('talhoes') as FormArray).push(this.talhao);
      this.buildForm();
      this.modalRef?.hide();
      this.talhaoId++;
    } else {
      this.talhao.markAllAsTouched();
    }
  }

  adicionarTalhao(modal: any) {
    this.modalRef = this.modalService.show(modal, { class: 'modal-lg' });
  }

  adicionarProdutividade(modal: any, index: number) {
    this.indexProdutividade = index;
    this.modalRef = this.modalService.show(modal, { class: 'modal-lg' });
  }

  removerTalhao(index: number) {
    (this.form.get('talhoes') as FormArray).removeAt(index);
  }

  removerProdutividade(index: number, indexProdutividade: number) {
    let produtividade = this.form.get(['talhoes', index, 'produtividade'])?.value;
    produtividade.splice(indexProdutividade, 1);
    this.form.get(['talhoes', index, 'produtividade'])?.setValue(produtividade);
  }

  salvarProdutividade() {
    if (this.formProdutividade.valid) {
      let produtividades = this.form.get(['talhoes', this.indexProdutividade])?.get('produtividade')?.value || [];
      produtividades.push(this.formProdutividade.value);
      this.form.get(['talhoes', this.indexProdutividade])?.get('produtividade')?.setValue(produtividades);
      this.buildForm();
      this.modalRef?.hide();
    } else {
      this.formProdutividade.markAllAsTouched();
    }
  }

  buildForm() {
    this.talhao = new FormGroup({
      id: new FormControl(''),
      area: new FormControl('', [Validators.required]),
      produtividade: new FormControl([]),
    });

    this.formProdutividade = new FormControl('', [Validators.required])
  }
}
