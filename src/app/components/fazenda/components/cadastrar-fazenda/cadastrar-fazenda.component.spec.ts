import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CadastrarFazendaComponent } from './cadastrar-fazenda.component';

describe('CadastrarFazendaComponent', () => {
  let component: CadastrarFazendaComponent;
  let fixture: ComponentFixture<CadastrarFazendaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CadastrarFazendaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CadastrarFazendaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
