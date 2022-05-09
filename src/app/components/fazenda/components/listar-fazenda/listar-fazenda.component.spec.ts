import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListarFazendaComponent } from './listar-fazenda.component';

describe('ListarFazendaComponent', () => {
  let component: ListarFazendaComponent;
  let fixture: ComponentFixture<ListarFazendaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListarFazendaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListarFazendaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
